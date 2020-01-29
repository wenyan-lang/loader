const { getOptions } = require('loader-utils')
const Wenyan = require('@wenyanlang/core')

module.exports = function (source, map) {
  const options = getOptions(this);
  this.callback(
    null,
    Wenyan.compile(
      source,
      {
        logCallback: () => 0,
        ...options,
      }
    ),
    map,
  );
};