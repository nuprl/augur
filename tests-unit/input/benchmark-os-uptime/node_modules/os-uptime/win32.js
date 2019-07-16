'use strict';
const execSync = require('child_process').execSync;

module.exports = () => {
  const output = execSync('net statistics workstation').toString();
  const date = output.match(/((\d{2}\.){2}\d{4}){1} ((\d{2}:){2}\d{2}){1}/gm);
  const split = date[0].split(' ');
  const format = split[0].split('.');
  const formatedDate = `${format[1]}-${format[0]}-${format[2]} ${split[1]}`;

  return new Date(formatedDate);
};
