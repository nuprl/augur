'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class NodeWOS
 * NodeJS utility for OS information
*/

var NodeWOS = function () {
  function NodeWOS() {
    _classCallCheck(this, NodeWOS);

    var platform = undefined,
        arch = undefined;

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

  _createClass(NodeWOS, [{
    key: 'isWindows',

    /**
      * @method isWindows
      * @return true if the current OS is Windows
    */
    value: function isWindows() {
      return this.platform == 'windows';
    }

    /**
      * @method isLinux
      * @return true if the current OS is Linux
    */

  }, {
    key: 'isLinux',
    value: function isLinux() {
      return this.platform == 'linux';
    }

    /**
      * @method isMac
      * @return true if the current OS is Mac
    */

  }, {
    key: 'isMac',
    value: function isMac() {
      return this.platform == 'mac';
    }

    /**
      * @method isSolaris
      * @return true if the current OS is Solaris
    */

  }, {
    key: 'isSolaris',
    value: function isSolaris() {
      return this.platform == 'solaris';
    }

    /**
      * @method isFreeBSD
      * @return true if the current OS is FreeBSD
    */

  }, {
    key: 'isFreeBSD',
    value: function isFreeBSD() {
      return this.platform == 'freeBSD';
    }

    /**
      * @method getOSName
      * @param verbose {boolean}
      * @return Attemp to discover what the current operation system name
    */

  }, {
    key: 'getOSName',
    value: function getOSName(verbose) {

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
  }], [{
    key: 'OS',
    value: function OS() {
      return _os2.default;
    }
  }]);

  return NodeWOS;
}();

/**
 * @private
 * @method getLinuxOperationSystemName
 * Attemp to discover what the current linux operation system name. Ex: ubuntu, fedora, openSuse
 * @param verbose {boolean}
 * @return {String} Operation system name or `lsb_release -d` response
*/

function getLinuxOperationSystemName(verbose) {
  var OSName = undefined,
      buffer = (0, _child_process.execSync)('lsb_release -d'),
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
  var buffer = (0, _child_process.execSync)('sw_vers -productVersion');

  return buffer.toString();
}

/**
 * @private
 * @method getMacOperationSystemName
 * Attemp to discover what the current windows operation system name
 * @return {String} `wmic os get Caption /value` response
*/
function getWindowsOperationSystem() {
  var buffer = (0, _child_process.execSync)('wmic os get Caption /value');

  return buffer.toString();
}

module.exports = new NodeWOS();
