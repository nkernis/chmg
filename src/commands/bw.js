import { 
  Command, 
  flags, 
} from '@oclif/command';
import DateFormat from 'dateformat';
import Jimp from 'jimp';
import JimpThreshold from '@jimp/plugin-threshold';
import JimpConfigure from '@jimp/custom';
import fs from 'fs';

JimpConfigure({ plugins: [JimpThreshold] }, Jimp)

export class BWCommand extends Command {
  async run() {
    const { argv, flags } = this.parse(BWCommand);
    const threshold = Number(flags.threshold )|| 150
    const ImageName = flags.image
    const RawImagePath = 'raw/' + ImageName;
    const ActiveImagePath = 'active/' + ImageName;
    const ExportImagePath = 'export/' + DateFormat(new Date(), "[mm-dd-yyyy][HMMss]") + "-" + ImageName;

    console.log("Importing image: " + ImageName + "...");
    const rawImage = await Jimp.read(RawImagePath);

    console.log("Cloning Image...");
    rawImage.clone().write(ActiveImagePath);

    console.log("Reading in new copy...");
    const activeImage = await Jimp.read(ActiveImagePath);

    console.log("Making the image a 'normie'...");
    activeImage.normalize()

    console.log("Applying threshold colors...");
    activeImage.threshold(
      {
        max: threshold
      }
    );

    console.log("Save new image...");
    activeImage.quality(100).write(ExportImagePath);

    console.log("Cleaning up...");
    fs.unlink(ActiveImagePath, () => {})

    console.log('Exported file: ' + ExportImagePath);
    console.log("I am done now. Come back later - or don't. Doesn't change a thing...");
  }
}

BWCommand.description = `Make an image black and white
Makes an image black and white by applying a threshold to it

The process makes the image look "scanned"

-//-
`

BWCommand.flags = {
  'image': flags.string({
    char: 'i',
    required: true,
    description: 'the image file to import',
  }),
  threshold: flags.string({
    char: 't',
    description: 'apply threshold to image (0 - 255)',
  }),
}
