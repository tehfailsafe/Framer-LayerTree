class module.exports
	@buildLayers = (file) ->
		for name, layer of file
			@createChildNodes layer

	@createChildNodes = (layer) ->
		for index, child of layer.children
			
			#check if layer name ends in number. If so, remove it.
			num = child.name.match(/\d+$/)
			if parseInt(num)
				layerName = child.name.slice(0, child.name.indexOf(num))
				layer[layerName] = child
			else
				layer[child.name] = child
