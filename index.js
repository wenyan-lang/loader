const { getOptions } = require('loader-utils')
const path = require('path')
const Wenyan = require('@wenyan/core')
const findUp = require('find-up')

const defaultConfig = {
  logCallback: () => 0,
}

module.exports = function (source, map) {
  const options = getOptions(this);

  const filepath = path.resolve(this._module.request.split('!').slice(-1)[0])
  const compileOptions = {
    ...defaultConfig,
    ...options,
    entryFilepath: filepath,
  }

  compileOptions.importPaths = compileOptions.importPaths || []
  compileOptions.importPaths.push(
    findUp.sync('藏書樓', { type: 'directory', cwd: path.dirname(filepath) })
  )

  this.callback(
    null,
    Wenyan.compile(source, compileOptions),
    map,
  );
};