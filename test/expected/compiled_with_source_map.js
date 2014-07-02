/* compiled with quickstart@1.0.0 */(function (main, modules) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm9kZV9tb2R1bGVzL3F1aWNrc3RhcnQvcnVudGltZS9icm93c2VyLmpzIiwiLi90ZXN0L2ZpeHR1cmVzL2NvbXBpbGVfd2l0aF9kZXAuanMiLCIuL3Rlc3QvZml4dHVyZXMvbW9kZWxzL015TW9kZWwuanMiXSwibmFtZXMiOlsiY2FjaGUiLCJyZXF1aXJlIiwiaWQiLCJtb2R1bGUiLCJtb2R1bGVGbiIsIm1vZHVsZXMiLCJFcnJvciIsImV4cG9ydHMiLCJjYWxsIiwid2luZG93IiwicmVzb2x2ZSIsInJlc29sdmVkIiwibm9kZSIsIm1haW4iLCJNeU1vZGVsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjBCQUVFO0FBQUE7QUFBQSxFQUdGLElBQUlBLEtBQUEsR0FBUUMsT0FBQSxDQUFRRCxLQUFSLEdBQWdCLEVBQTVCLENBSEU7QUFBQSxFQUtGLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQUEsSUFDbkIsSUFBSUMsTUFBQSxHQUFTSCxLQUFBLENBQU1FLEVBQU4sQ0FBYixDQURtQjtBQUFBLElBRW5CLElBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQUEsTUFDWCxJQUFJQyxRQUFBLEdBQVdDLE9BQUEsQ0FBUUgsRUFBUixDQUFmLENBRFc7QUFBQSxNQUVYLElBQUksQ0FBQ0UsUUFBTDtBQUFBLFFBQWUsTUFBTSxJQUFJRSxLQUFKLENBQVUsWUFBWUosRUFBWixHQUFpQixZQUEzQixDQUFOLENBRko7QUFBQSxNQUdYQyxNQUFBLEdBQVNILEtBQUEsQ0FBTUUsRUFBTixJQUFZLEVBQXJCLENBSFc7QUFBQSxNQUlYLElBQUlLLE9BQUEsR0FBVUosTUFBQSxDQUFPSSxPQUFQLEdBQWlCLEVBQS9CLENBSlc7QUFBQSxNQUtYSCxRQUFBLENBQVNJLElBQVQsQ0FBY0QsT0FBZCxFQUF1Qk4sT0FBdkIsRUFBZ0NFLE1BQWhDLEVBQXdDSSxPQUF4QyxFQUFpREUsTUFBakQsRUFMVztBQUFBLEtBRk07QUFBQSxJQVNuQixPQUFPTixNQUFBLENBQU9JLE9BQWQsQ0FUbUI7QUFBQSxHQUxuQjtBQUFBLEVBaUJGTixPQUFBLENBQVFTLE9BQVIsR0FBa0IsVUFBU0MsUUFBVCxFQUFtQjtBQUFBLElBQ25DLE9BQU9BLFFBQVAsQ0FEbUM7QUFBQSxHQUFyQyxDQWpCRTtBQUFBLEVBcUJGVixPQUFBLENBQVFXLElBQVIsR0FBZSxZQUFXO0FBQUEsSUFDeEIsT0FBTyxFQUFQLENBRHdCO0FBQUEsR0FBMUIsQ0FyQkU7QUFBQSxFQXlCRlgsT0FBQSxDQUFRWSxJQUFSLEVBekJFO0FBQUEsQztxRkNGRjtBQUFBLFFBQUlDLE9BQUEsR0FBVWIsT0FBQSxDQUFTLG1DQUFULENBQWQ7QUFBQSxJQUVBLElBQUlhLE9BQUosR0FGQTtBQUFBLEc7bUZDQUE7QUFBQSxJQUFBQyxPQUFBLENBQVFDLEdBQVIsQ0FBYSxTQUFiO0FBQUEsRyJ9
