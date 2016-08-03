# Framer-LayerTree
Adds layer children as properties of each imported layer so you can selectively target them.

# Installation
Simply pull down LayerTree.coffee and put into your modules folder for the current project.

# Usage
First import your file from  Sketch / Photoshop
```
sketch = Framer.Importer.load("imported/import@1x")
```

Then require LayerTree, assign it to a variable, and call the `buildLayers` method passing in the imported file.
```
LayerTree = require "LayerTree"
LayerTree.buildLayers(sketch)
```


That's it, now you should be able to access any sub layer by name, retaining the original hierarchy. For example, if you have an Artboard with the title "Notifications", a group "List", and multiple groups inside of it like "follower1", "follower2" etc you can now specifically access them using `root.Notifications.List.follower1`.

Can also be used in loops to apply methods to many children at once:
```
ListItems = [
  root.Notifications.List.follower1, 
  root.Notifications.List.follower2, 
  root.Notifications.List.follower3 
]

for item in ListItems
	item.Avatar.states.add
		active: scale: 1.5
		
item.Avatar.on Events.Click, (event, target) ->
		target.states.next()
```
