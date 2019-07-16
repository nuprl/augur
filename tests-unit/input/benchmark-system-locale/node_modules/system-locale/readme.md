# system-locale

**Get the [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)) from your operating system.** Support macOS, Linux & Windows.

[![npm version](https://img.shields.io/npm/v/system-locale.svg)](https://www.npmjs.com/package/system-locale)
[![Travis build status](https://img.shields.io/travis/derhuerst/system-locale.svg)](https://travis-ci.org/derhuerst/system-locale)
[![AppVeyor build status](https://img.shields.io/travis/derhuerst/system-locale.svg)](https://img.shields.io/appveyor/ci/derhuerst/system-locale.svg)
[![dependency status](https://img.shields.io/david/derhuerst/system-locale.svg)](https://david-dm.org/derhuerst/system-locale)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/system-locale.svg)](https://david-dm.org/derhuerst/system-locale#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/system-locale.svg)


## Installing

```shell
npm install system-locale
```


## Usage

```js
const locale = require('system-locale')
locale().then(console.log)
```

```
en_DE
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/system-locale/issues).
