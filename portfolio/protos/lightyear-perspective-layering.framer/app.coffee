{PerspectiveView} = require "perspective-view"
perspectiveView = new PerspectiveView

background = new BackgroundLayer backgroundColor: "F2F2F2"

container = new Layer
	size: Screen.size
	clip: false

home = new Layer
	x: -Screen.width - 32
	width: 750
	height: 1334
	image: "images/home2.png"
	parent: container

srp2 = new Layer
	width: 750
	height: 1334
	image: "images/srp2.png"
	parent: container

mini_app2 = new Layer
	x: Screen.width + 32
	width: 750
	height: 1334
	image: "images/mini-app2.png"
	parent: container

menu = new Layer
	y: Align.bottom
	width: 750
	height: 122
	image: "images/menu.png"

Group_9 = new Layer
	width: 750
	height: 1334
	image: "images/Group 9.png"



	
# home = new Layer
# 	width: 750
# 	height: 1334
# 	image: "images/Group 4.png"
# 	

# 
# container = new Layer
# 	size: Screen.size
# 	clip: false
# 
# web = new Layer
# 	width: 750
# 	height: 1334
# 	image: "images/Group 3.png"
# 	parent: container
# 
# miniapp = new Layer
# 	x: Screen.width + 32
# 	width: 750
# 	height: 1334
# 	image: "images/miniapp.png"
# 	parent: container
# 
recents = new Layer
	width: 750
	height: 1334
	image: "images/Group 2.png"
	
Group_9.on Events.Tap, ->
	
	perspectiveView.toggle(true, 200, 0.9) # .toggle(rotation = true, z = 40, opacity = 0.8)
