![node-wos](http://i.imgur.com/QmqSPwv.png)

# node-wos
Node What Operation System - Utility for operating system information.

## What is this?
`node-wos` is a small wrapper to help you with the most commom operating system information.

## Installation

```bash
npm i node-wos --save
```

```bash
# Global Installation
npm i -g node-wos
```

## Example

```javascript
var wos = require('node-wos');

console.log(wos.isLinux()); // true
console.log(wos.platform); // linux

console.log(wos.arch); // 64bit

console.log(wos.getOSName()); // ubuntu

// Container to require('os')
console.log(wos.OS);

```

## Documentation

### `NodeWOS.platform`
Return the currrent platform.

#### return
- **String** Platform can be `windows, linux, mac, freeBSD, solaris`


### `NodeWOS.arch`
Return the current architecture.

#### return
- **String** Architecture can be `64bit, 32bit, ARM`.

### `NodeWOS.OS`
Container to the NodeJS OS module available on `require('os')`.

#### return
- **Object** Equals to `require('os')`

### `NodeWOS.isWindows()`
Verify if the current os is windows.

#### return
- **Boolean**

### `NodeWOS.isLinux()`
Verify if the current os is linux.

#### return
- **Boolean**

### `NodeWOS.isMac()`
Verify if the current os is mac.

#### return
- **Boolean**

### `NodeWOS.isSolaris()`
Verify if the current os is solaris.

#### return
- **Boolean**

### `NodeWOS.isFreeBSD()`
Verify if the current os is freeBSD.

#### return
- **Boolean**

### `NodeWOS.getOSName([verbose])`
Attemp to discover what the current operation system name. Ex: ubuntu, fedora, gentoo, Windows 10 Single Language...

#### params
- **boolean** `verbose` : returns a non treated output for the os name command

#### return
- **String** Operating system name or *`{platform} {arch}`*

## Cli API
To see the all the cli options just execute

```bash
wos -help
# or
wos
```

## Contributing
`node-wos` is built using *ecma script 6* and use [babeljs]( https://babeljs.io/) to convert the code. To develop your changes just clone the project and execute the grunt task.

```bash
git clone https://github.com/mapaiva/node-wos.git
cd node-wos
npm install
npm run dev

#To build
npm run build
```

## License
Copyright (c) 2015 Matheus Paiva (GPL-2.0) GNU GENERAL PUBLIC LICENSE
