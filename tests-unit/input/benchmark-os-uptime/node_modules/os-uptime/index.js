'use strict';

if (process.platform === 'darwin') {
  module.exports = require('./darwin');
} else if (process.platform === 'linux') {
  module.exports = require('./linux');
} else if (process.platform === 'win32') {
  module.exports = require('./win32');
} else {
  throw new Error('Only linux, darwin and win32 are supported, you have: ' + process.platform);
}
