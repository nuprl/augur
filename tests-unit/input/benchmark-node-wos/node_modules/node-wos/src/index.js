import os from 'os';
import { execSync } from 'child_process';

/**
 * @class NodeWOS
 * NodeJS utility for OS information
*/
class NodeWOS {
  constructor() {
    let platform, arch;

    switch (process.platform) {
      case 'win32':
        platform = 'windows';
        break;
      case 'linux':
        platform = 'linux';
        break;
      case 'darwin':
        platform = 'mac';
        break;
      case 'freebsd':
        platform = 'freeBSD';
        break;
      case 'sunos':
        platform = 'solaris';
        break;
      default:
        platform = process.platform;
        break;
    }

    switch (process.arch) {
      case 'x64':
        arch = '64bit';
        break;
      case 'ia32':
        arch = '32bit';
      case 'arm':
        arch = 'ARM';
      default:
        arch = process.arch;
        break;
    }

    this.platform = platform;
    this.arch = arch;
  }

  /**
    * @method OS
    * @return NodeJS native OS module
  */
  static OS() {
    return os;
  }

  /**
    * @method isWindows
    * @return true if the current OS is Windows
  */
  isWindows() {
    return this.platform == 'windows';
  }

  /**
    * @method isLinux
    * @return true if the current OS is Linux
  */
  isLinux() {
    return this.platform == 'linux';
  }

  /**
    * @method isMac
    * @return true if the current OS is Mac
  */
  isMac() {
    return this.platform == 'mac';
  }

  /**
    * @method isSolaris
    * @return true if the current OS is Solaris
  */
  isSolaris() {
    return this.platform == 'solaris';
  }

  /**
    * @method isFreeBSD
    * @return true if the current OS is FreeBSD
  */
  isFreeBSD() {
    return this.platform == 'freeBSD';
  }

  /**
    * @method getOSName
    * @param verbose {boolean}
    * @return Attemp to discover what the current operation system name
  */
  getOSName(verbose) {

    switch (this.platform) {
      case 'linux':
        return getLinuxOperationSystemName(verbose);
      case 'mac':
        return getMacOperationSystemName();
      case 'windows':
        return getWindowsOperationSystem();
      default:
        return this.platform.concat(' ').concat(this.arch);
    }
  }
}

/**
 * @private
 * @method getLinuxOperationSystemName
 * Attemp to discover what the current linux operation system name. Ex: ubuntu, fedora, openSuse
 * @param verbose {boolean}
 * @return {String} Operation system name or `lsb_release -d` response
*/
function getLinuxOperationSystemName(verbose) {
  let OSName,
    buffer = execSync('lsb_release -d'),
    release = buffer.toString().toLowerCase();

  if (verbose) {
    return buffer.toString();
  } else {
    if (release.indexOf('ubuntu') > -1) {
      OSName = 'ubuntu';
    } else if (release.indexOf('fedora') > -1) {
      OSName = 'fedora';
    } else if (release.indexOf('opensuse') > -1) {
      OSName = 'openSUSE';
    } else if (release.indexOf('arch') > -1) {
      OSName = 'arch';
    } else if (release.indexOf('debian') > -1) {
      OSName = 'debian';
    } else if (release.indexOf('centos') > -1) {
      OSName = 'centOS';
    } else if (release.indexOf('gentoo') > -1) {
      OSName = 'gentoo';
    } else if (release.indexOf('majaro') > -1) {
      OSName = 'manjaro';
    } else if (release.indexOf('elementary') > -1) {
      OSName = 'elementaryOS';
    } else {
      return release;
    }

    return OSName;
  }
}

/**
 * @private
 * @method getMacOperationSystemName
 * Attemp to discover what the current mac operation system name
 * @return {String} `sw_vers -productVersion` response
*/
function getMacOperationSystemName() {
  let buffer = execSync('sw_vers -productVersion');

  return buffer.toString();
}

/**
 * @private
 * @method getMacOperationSystemName
 * Attemp to discover what the current windows operation system name
 * @return {String} `wmic os get Caption /value` response
*/
function getWindowsOperationSystem() {
  let buffer = execSync('wmic os get Caption /value');

  return buffer.toString();
}

export default new NodeWOS();
