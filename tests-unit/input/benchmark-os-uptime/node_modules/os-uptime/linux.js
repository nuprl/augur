'use strict';
const execSync = require('child_process').execSync;

module.exports = () => {
  const output = execSync('uptime -s').toString();

  return new Date(output);
};
