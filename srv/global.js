var path = require('path');

/** @type {Object} - global.swot is a global vars namespace for this project. */
global.swot = {};

/** @type {String} - absolute path to the root directory for this project. */
swot.ROOTDIR = path.normalize(__dirname + '/../');

/** @type {String} - absolute path to the vendor directory for this Back-End. */
swot.VENDORDIR = swot.ROOTDIR + '/srv/vendor/node_modules/';
