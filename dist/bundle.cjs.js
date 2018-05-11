'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var filePathOneLayer = _interopDefault(require('file-path-one-layer'));

async function lift() {
  // eslint-disable-next-line no-multi-assign
  let controllers = this.controllers = {};
  /* eslint-disable global-require */

  /* eslint-disable import/no-dynamic-require */

  let functionList = await filePathOneLayer(path.join(this.projectPath, 'controllers'));
  functionList.forEach(controllerFile => {
    let result = require(controllerFile.path);

    controllers[controllerFile.name] = result.default ? result.default : result;
  });
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
