var LayerTree;

LayerTree = (function() {
  function LayerTree() {}

  LayerTree.buildLayers = function(file) {
    var layer, name, results;
    results = [];
    for (name in file) {
      layer = file[name];
      results.push(this.createChildNodes(layer));
    }
    return results;
  };

  LayerTree.createChildNodes = function(layer) {
    var child, index, ref, results;
    ref = layer.children;
    results = [];
    for (index in ref) {
      child = ref[index];
      results.push(layer[child.name] = child);
    }
    return results;
  };

  return LayerTree;

})();
