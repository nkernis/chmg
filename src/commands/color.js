import { 
  Command, 
  flags ,
} from '@oclif/command';
import DateFormat from 'dateformat';
import Jimp from 'jimp';
import fs from 'fs';

export class ColorCommand extends Command {
  async run() {
    const { flags } = this.parse(ColorCommand);
    const color = flags.color || '#0033E7'
    const saturate = flags.saturate || 50
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

    console.log("Changing images colors...");
    await activeImage.color([
      {
        apply: 'saturate',
        params: [saturate],
      },
      {
        apply: 'xor',
        params: [color],
      },
    ]);

    console.log("Save new image...");
    activeImage.quality(100).write(ExportImagePath);

    console.log("Cleaning up...");
    fs.unlink(ActiveImagePath, () => {})

    console.log('Exported file: ' + ExportImagePath);
    console.log("I am done now. Come back later - or don't. Doesn't change a thing...");
  }
}

ColorCommand.flags = {
  'image': flags.string({
     char: 'i',
     required: true,
     description: 'the image file to import',
  }),
  color: flags.string({
    char: 'c',
    description: 'color (hex) to use for "xor"',
  }),
  saturate: flags.string({
    char: 's',
    description: 'saturate the color a given amount (0 - 100)',
  }),
}

ColorCommand.description = `Manipulate an images color
saturate: 
  - saturates an image (saturation is used to describe the intensity of the color an image)

xor:
  - treats the two colors as bitfields and applies an XOR operation to the red, green, and blue components

-//-
`