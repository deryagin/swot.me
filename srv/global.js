var path = require('path');

/**
 * global.swot - is a namespace designed to store all global vars of this project.
 *
 * @type {Object}
 */
global.swot = {

  /** @type {String} - absolute path to the root directory of this project. */
  ROOTDIR: path.normalize(__dirname + '/../')
};
