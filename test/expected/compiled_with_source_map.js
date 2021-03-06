(function (main, modules) {
  'use strict';
  var cache = require.cache = {};
  function require(id) {
    var module = cache[id];
    if (!module) {
      var moduleFn = modules[id];
      if (!moduleFn)
        throw new Error('module ' + id + ' not found');
      module = cache[id] = {};
      var exports = module.exports = {};
      moduleFn.call(exports, require, module, exports, window);
    }
    return module.exports;
  }
  require.resolve = function (resolved) {
    return resolved;
  };
  require.node = function () {
    return {};
  };
  require(main);
}('./test/fixtures/compile_with_dep.js', {
  './test/fixtures/compile_with_dep.js': function (require, module, exports, global) {
    var MyModel = require('./test/fixtures/models/MyModel.js');
    new MyModel();
  },
  './test/fixtures/models/MyModel.js': function (require, module, exports, global) {
    console.log('MyModel');
  }
}));