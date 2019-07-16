'use strict'
const os = require('os');
const _ = require('lodash');
const ps = require('current-processes');
const childProcess = require('child_process')

exports.platform = () => {
  return process.platform;
}

exports.uptime = () => {
  return os.uptime();
}

exports.cpuLoad = () => {
  return new Promise((resolve, reject) => {
    let beforeCpuInfos;
    getCPUInfo().then(result => {
      beforeCpuInfos = result;
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 1000);
      });
    }).then(() => {
      return getCPUInfo();
    }).then(afterCpuInfos => {
      let idle = afterCpuInfos.idle - beforeCpuInfos.idle;
      let total = afterCpuInfos.total - beforeCpuInfos.total;
      let perc = idle / total;
      resolve(Math.floor((1 - perc) * 100));
    }, (error) => {
      reject(error);
    });
  });
}

exports.memoryUsage = () => {
  return new Promise((resolve, reject) => {
    let computeUsage = (used, total) => {
      return Math.round(100 * (used / total));
    };

    //Windows platform
    if (process.platform === 'win32') {
      Promise.all([
        winGetFreeMemory(),
        winGetTotalMemory()
      ]).then(results => {
        resolve(100 - computeUsage(results[0], results[1]));
      }, err => {
        reject(err);
      });
      //MacOSX platform
    } else if (process.platform === "darwin") {
      childProcess.exec('memory_pressure | grep "System-wide memory free percentage: "', (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          let data = stdout.replace('%', '').replace(/[\s\n\r]+/g, ' ').split(' ');
          resolve(data[4]);
        }
      });
      //Linux platform
    } else {
      childProcess.exec('free -m', (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          let data = stdout.split('\n')[1].replace(/[\s\n\r]+/g, ' ').split(' ');
          let used = parseInt(data[2]);
          let total = parseInt(data[1]);
          resolve(computeUsage(used, total));
        }
      });
    }
  });
}

exports.currentProcesses = sort => {
  return new Promise((resolve, reject) => {
    let currentproc = [];
    ps.get((err, processes) => {
      if (err) {
        reject(err);
      } else {
        processes.forEach(proc => {
          let process = {};
          process.pid = proc.pid;
          process.name = proc.name;
          process.cpu = proc.cpu;
          process.mem = proc.mem.usage;
          currentproc.push(process);
        });
        if (sort) {
          const sorted = _.orderBy(currentproc, [sort.type], [sort.order]);
          resolve(sorted);
        } else {
          resolve(currentproc);
        }
      }
    });
  });
}

exports.services = filters => {
  return new Promise((resolve, reject) => {
    let listeServices = [];
    if (process.platform === 'linux') {
      childProcess.exec('service --status-all', (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          let result = stdout.split('\n');
          result.splice(-1, 1);
          result.forEach(line => {
            let data = line.split(']');
            let service = {};
            service.name = data[1].trim();
            service.runing = (data[0].trim().substring(2, 3) === '+') ? true : false;
            listeServices.push(service);
          });

          if (filters) {
            let filteredServices = [];
            filters.forEach(filter => {
              filteredServices.push(_.find(listeServices, filter));
            });
            resolve(filteredServices);
          } else {
            resolve(listeServices);
          }
        }
      });
    } else {
      reject(new Error("Unsuported platform"));
    }
  });
}

function getCPUInfo() {
  return new Promise((resolve, reject) => {
    const cpus = os.cpus();
    if (!cpus) {
      reject(new Error("Unexpected error"));
    } else {
      let user = 0,
        nice = 0,
        sys = 0,
        idle = 0,
        irq = 0,
        total = 0;

      for (var cpu in cpus) {

        user += cpus[cpu].times.user;
        nice += cpus[cpu].times.nice;
        sys += cpus[cpu].times.sys;
        irq += cpus[cpu].times.irq;
        idle += cpus[cpu].times.idle;
      }
      total = user + nice + sys + idle + irq;
      resolve({
        'idle': idle,
        'total': total
      });
    }
  });
}

function winGetFreeMemory() {
  return new Promise((resolve, reject) => {
    childProcess.exec('wmic os get freephysicalmemory /format:value', function (err, stdout) {
      if (err) {
        reject(err);
      } else {
        let used = parseInt(stdout.split('\n')[2].split('=')[1]);
        resolve(used);
      }
    });
  });
}

function winGetTotalMemory() {
  return new Promise((resolve, reject) => {
    childProcess.exec('wmic os get TotalVisibleMemorySize /format:value', function (err, stdout) {
      if (err) {
        reject(err);
      } else {
        let used = parseInt(stdout.split('\n')[2].split('=')[1]);
        resolve(used);
      }
    });
  });
}