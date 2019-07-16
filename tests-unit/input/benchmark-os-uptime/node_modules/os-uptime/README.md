os-uptime
=====

Get operating system's uptime as a date.

For each platform a different command is used to retrieve the uptime as a date. The commands are as follows:

* linux - `uptime -s`
* darwin - `sysctl -n kern.boottime`
* win32 - `net statistics workstation`

---

You might also be interested in Node.js’s native [`os.uptime()` method](https://nodejs.org/api/os.html#os_os_uptime). See [#1](https://github.com/oroce/node-os-uptime/issues/1) for reasons to use this package instead.

# Install

```
npm install os-uptime
```

# Usage

```
const uptime = require('os-uptime');

console.log('System was started at: %s', uptime().toLocaleString());
```

# LICENSE

MIT
