import path from 'path';
import filePathOneLayer from '@ofa2/file-path-one-layer';

async function lift() {
  // eslint-disable-next-line no-multi-assign
  let controllers = (this.controllers = {});

  /* eslint-disable global-require */
  /* eslint-disable import/no-dynamic-require */
  let functionList = await filePathOneLayer(path.join(this.projectPath, 'controllers'));
  functionList.forEach((controllerFile) => {
    let result = require(controllerFile.path);
    controllers[controllerFile.name] = result.default ? result.default : result;
  });
}

export default lift;
