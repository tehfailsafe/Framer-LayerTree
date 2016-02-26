LayerTree = (function() {
  function exports() {}

  exports.buildLayers = function(file) {
    var layer, name, results;
    results = [];
    for (name in file) {
      layer = file[name];
      results.push(this.createChildNodes(layer));
    }
    return results;
  };

  exports.createChildNodes = function(layer) {
    var child, index, ref, results;
    ref = layer.children;
    results = [];
    for (index in ref) {
      child = ref[index];
      results.push(layer[child.name] = child);
    }
    return results;
  };

  return exports;

})();
