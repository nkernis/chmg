chmg
====

CLI tool to change images to how I want&#39;em.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/chmg.svg)](https://npmjs.org/package/chmg)
[![Downloads/week](https://img.shields.io/npm/dw/chmg.svg)](https://npmjs.org/package/chmg)
[![License](https://img.shields.io/npm/l/chmg.svg)](https://github.com/nkernis/chmg/blob/master/package.json)


_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
* [Usage](#usage)
* [Commands](#commands)

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
# Usage

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
```sh-session
$ npm install -g chmg
$ chmg COMMAND
running command...
$ chmg (-v|--version|version)
chmg/0.0.0 darwin-x64 node-v10.14.1
$ chmg --help [COMMAND]
USAGE
  $ chmg COMMAND
...
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
# Commands

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
* [`chmg bw`](#chmg-bw)
* [`chmg color`](#chmg-color)
* [`chmg help [COMMAND]`](#chmg-help-command)

## `chmg bw`

```
Make an image black and white

USAGE
  $ chmg bw

OPTIONS
  -i, --image=image          (required) the image file to import
  -t, --threshold=threshold  apply threshold to image (0 - 255)

DESCRIPTION
  Makes an image black and white by applying a threshold to it

  The process makes the image look "scanned"
```

_See code: [src/commands/bw.js](https://github.com/nkernis/chmg/blob/v0.0.0/src/commands/bw.js)_

## `chmg color`

```
Manipulate an images color

USAGE
  $ chmg color

OPTIONS
  -c, --color=color        color (hex) to use for "xor"
  -i, --image=image        (required) the image file to import
  -s, --saturate=saturate  saturate the color a given amount (0 - 100)

DESCRIPTION
  saturate:
     - saturates an image (saturation is used to describe the intensity of the color an image)

  xor:
     - treats the two colors as bitfields and applies an XOR operation to the red, green, and blue components
```

_See code: [src/commands/color.js](https://github.com/nkernis/chmg/blob/v0.0.0/src/commands/color.js)_

## `chmg help [COMMAND]`

```
CLI tool to change images to how I want'em

VERSION
  chmg/0.0.0 darwin-x64 node-v10.14.1

USAGE
  $ chmg [COMMAND]

COMMANDS
  bw     Make an image black and white
  color  Manipulate an images color
  help   display help for chmg
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
