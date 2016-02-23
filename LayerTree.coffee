class module.exports
	@buildLayers = (file) ->
		for name, layer of file
			@createChildNodes layer

	@createChildNodes = (layer) ->
		for index, child of layer.children
			layer[child.name] = child
