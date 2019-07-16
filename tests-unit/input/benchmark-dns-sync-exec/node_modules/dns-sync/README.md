node-dns-sync
=============

[![Build Status](https://travis-ci.org/skoranga/node-dns-sync.png)](https://travis-ci.org/skoranga/node-dns-sync)

Sync/Blocking DNS resolve. Main usecase is in node server startup.

### How to Use
```javascript
var dnsSync = require('dns-sync');

console.log(dnsSync.resolve('www.paypal.com'));     //should return the IP address
console.log(dnsSync.resolve('www.yahoo.com'));
console.log(dnsSync.resolve('www.non-host.something')); //should return null
```