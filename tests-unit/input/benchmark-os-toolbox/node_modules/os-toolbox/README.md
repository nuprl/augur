OS Toolbox
==========
[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.org/Ziggornif/os-toolbox.svg?branch=master)](https://travis-ci.org/Ziggornif/os-toolbox)

## Installation
``` bash
$ npm install os-toolbox
```

## Usage

``` javascript
var ostb = require( 'os-toolbox' );
```

### Before use 
**/!\ All functions use promises !**

### Get platform
Get platform name.
``` javascript
ostb.platform(); //ex : linux
```

### Get uptime
Get system uptime in seconds.
``` javascript
ostb.uptime(); //ex : 419419
```

### Get CPU load
Get cpu load percentage.
``` javascript
ostb.cpuLoad().then(function(cpuusage){
   console.log(cpuusage); //ex: 34 (percent)
});
```

### Get memory usage
Get memory usage percentage.
``` javascript
ostb.memoryUsage().then(function(memusage){
   console.log(memusage); //ex: 93 (percent)
}, function(error){
    //errors here
});
```

### Get current processes
Get current running processes.
``` javascript
ostb.currentProcesses().then(function(processes){
   console.log(processes);
}, function(error){
    //errors here
});
```

**Using sort :**

Results could be sort by each attributes (cpu, memory, pid ...) (cf example)

Sort param format:
* type: pid, name, cpu or mem
* order: asc or desc

``` javascript
   { 
       type: 'cpu', 
       order: 'desc'
    }
```

Exemple:
``` javascript
ostb.currentProcesses(sort).then(function(processes){
   console.log(processes);
}, function(error){
    //errors here
});
```

**The following is an example current processes output :**

``` javascript
[ { pid: 2316, name: 'code', cpu: 4, mem: 1.114957060891639 },
  { pid: 2310, name: 'nautilus', cpu: 8, mem: 0.989467485779745 },
  { pid: 3867, name: 'notify-osd', cpu: 0, mem: 0.8229067957850149 },
  { pid: 2312, name: 'albert', cpu: 1, mem: 0.8190965839223904 },
  { pid: 1716, name: 'code', cpu: 0.3, mem: 0.8020248554469948 },
  { pid: 2457, name: 'code', cpu: 1.6, mem: 0.7947013313474048 }
]
```

### Get system services list (Linux only)
Get system services list.
``` javascript
ostb.services().then(function (result) {
   console.log(result);
}, function(error){
    //errors here
});
```

**Using filters :**

Results could be filtered by service name (cf example)

Filters param format:
``` javascript
   [{name: 'service'}, {name: ....]
```

Exemple:
``` javascript
ostb.services(filters).then(function (result) {
   console.log(result);
}, function(error){
    //errors here
});
```

**The following is an example system services output :**
``` javascript
[ { name: 'apache2', runing: false },
  { name: 'cron', runing: true },
  { name: 'dbus', runing: false },
  { name: 'exim4', runing: false },
  { name: 'nginx', runing: false },
  { name: 'php5-fpm', runing: false },
  { name: 'postgresql', runing: false },
  { name: 'procps', runing: false },
  { name: 'rabbitmq-server', runing: false },
  { name: 'redis-server', runing: false },
  { name: 'resolvconf', runing: true },
  { name: 'rsync', runing: false },
  { name: 'rsyslog', runing: false },
  { name: 'sudo', runing: false },
  { name: 'udev', runing: false },
  { name: 'unattended-upgrades', runing: false },
  { name: 'urandom', runing: false },
  { name: 'x11-common', runing: false } ]
```

## License

[MIT license](http://opensource.org/licenses/MIT). 

[npm-image]: https://img.shields.io/npm/v/os-toolbox.svg
[npm-url]: https://www.npmjs.com/package/os-toolbox
