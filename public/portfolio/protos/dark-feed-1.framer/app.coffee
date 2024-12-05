Material = require "material"

startTouchOffset = null
dragDirection = null

Framer.Extras.Hints.enable()
Framer.Extras.Preloader.enable()
Framer.Device.setDeviceScale(0.3)
Framer.Extras.Preloader.addImage("images/bg.png")
Framer.Defaults.Animation.curve = "spring(200, 30, 0)"

sc = (val) -> 
	Math.round Screen.width * val / 412

# Layers

bg = new Layer
	width: 1166
	height: 1920
	x: Align.right
	image: "images/bg.png"

statusbar = new Layer
	width: 1080
	height: 63
	image: "images/statusbar.png"

container = new Layer
	height: Screen.height
	width: Screen.width * 2
	x: -Screen.width 
	backgroundColor: null

container.draggable.enabled = true
container.draggable.vertical = false
container.draggable.bounce = false
container.draggable.overdrag = false
container.draggable.constraints = 
	x: -Screen.width
	y: 0
	width: Screen.width * 3
	height: Screen.height

minus = new Layer
	size: Screen.size
	parent: container
	clip: true
	backgroundColor: null

feedBg = new Layer
	size: Screen.height * 2.2
	backgroundColor: "#F2F2F2"
	borderRadius: "50%"
	opacity: 0
	scale: 0
	parent: minus

header = new Layer
	midY: 0
	width: 1080
	height: 723
	image: "images/header.png"
	parent: minus
	opacity: 0

searhBox = new Layer
	width: sc 396
	height: sc 44
	x: sc 8
	y: sc 34
	parent: minus
	backgroundColor: "rgba(64, 64, 64, 0.9)"
	borderRadius: sc 2
	shadowY: sc 1
	shadowBlur: sc 3
	shadowColor: "rgba(0, 0, 0, 0.24)"

glassDark = new Layer
	width: 64
	height: 64
	image: "images/glassdark.png"
	parent: searhBox
	x: sc 10
	y: sc 10

glassLight = new Layer
	width: 64
	height: 64
	image: "images/glasslight.png"
	parent: searhBox
	x: sc 10
	y: sc 10
	opacity: 0

mic = new Layer
	x: Align.right sc -12
	y: Align.center
	width: 37
	height: 52
	image: "images/mic.png"
	parent: searhBox

titleLight = new Layer
	y: sc 96
	width: 1080
	height: 115
	image: "images/titlelight.png"
	parent: minus
	opacity: 0

titleDark = new Layer
	y: sc 96
	width: 1080
	height: 115
	image: "images/titledark.png"
	parent: minus
	

cardA = new Layer
	width: sc 412
	height: sc 276
	y: sc 140
	parent: minus
	clip: true
	backgroundColor: "rgba(64, 64, 64, 0.9)"
	borderRadius: sc 2
	shadowY: sc 1
	shadowBlur: sc 3
	shadowColor: "rgba(0, 0, 0, 0.24)"

cardadark = new Layer
	width: 1080
	height: 723
	image: "images/cardadark.png"
	parent: cardA
	
cardalight = new Layer
	width: 1080
	height: 723
	image: "images/cardalight.png"
	parent: cardA
	opacity: 0

cardB = new Layer
	width: sc 412
	height: sc 337
	y: sc 424
	parent: minus
	backgroundColor: "rgba(64, 64, 64, 0.9)"
	borderRadius: sc 2
	shadowY: sc 1
	shadowBlur: sc 3
	shadowColor: "rgba(0, 0, 0, 0.24)"
	
cardbdark = new Layer
	width: 1080
	height: 805
	image: "images/cardbdark.png"
	parent: cardB
	
cardblight = new Layer
	width: 1080
	height: 805
	image: "images/cardblight.png"
	parent: cardB
	opacity: 0

fabBg = new Layer
	width: sc 58
	height: sc 58
	x: Screen.width
	y: Align.bottom(- sc 74)
	shadowY: sc 2
	shadowBlur: sc 12
	shadowColor: "rgba(0, 0, 0, 0.34)"
	backgroundColor: "white"
	borderRadius: "50%"

fab = new Layer
	image: "images/fab.png"
	width: 72
	height: 72
	parent: fabBg
	point: Align.center

spinner = new Material.Spinner
	size: 20
	thickness: 2.5
	color: "#4285F4"
	changeColor: no
	parent: fabBg
	x: sc 18
	y: sc 18

menu = new Layer
	y: Screen.height
	width: 1080
	height: 236
	image: "images/menu.png"
	parent: minus

navBarBg = new Layer
	width: Screen.width
	height: 356
	y: Align.bottom
	backgroundColor: "rgba(99,99,99,0.90)" 
	clip: true

navbar = new Layer
	width: 1080
	height: 126
	y: Align.bottom
	image: "images/navbar.png"

apps = new Layer
	y: 36
	width: 1080
	height: 184
	image: "images/apps.png"
	parent: navBarBg


layer.states.default for layer in Framer.CurrentContext.layers

# Logic

dragMinusOne = ->
	direction = container.draggable.direction
	
	if direction is "right" or direction is "left"
		dragDirection = container.draggable.direction

openCloseMinus = (event) ->
	threshold = container.midX > 100
	curveWithVelocity = "spring(300, 40, #{Math.abs(container.draggable.velocity.x)})"
	
	container.animateStop()
	
	if dragDirection is "right"
		container.animate
			x: 0
			options: curve: curveWithVelocity
	else
		container.animate 
			x: -Screen.width
			options: curve: curveWithVelocity

bgParallax = ->
	bg.x = Utils.modulate(container.x
		[-Screen.width, 0]
		[-86, 0]
		false
	)
	
	apps.y = Utils.modulate(container.x
		[-Screen.width, 0]
		[apps.states.default.y, apps.states.default.y - 232]
		false
	)
	
	apps.opacity = Utils.modulate(container.x
		[-Screen.width, 0]
		[1, 0]
		false
	)
	
# 	apps.x = Utils.modulate(container.x
# 		[-Screen.width, 0]
# 		[apps.states.default.x, apps.states.default.x + Screen.width]
# 		false
# 	)

navBarCollapse = ->
	navBarBg.y = Utils.modulate(container.x
		[-Screen.width, 0]
		[navBarBg.states.default.y, navBarBg.states.default.y + 230]
		false
	)

fabTransition = ->
	fabBg.x = Utils.modulate(container.x
		[-Screen.width / 2, 0]
		[fabBg.states.default.x, fabBg.states.default.x - 220]
		false
	)
	
fabPressed = ->
	fabBg.animate
		scale: 0.8
		options: curve: "spring(400, 40, 0)"

transformLight = ->
	feedBg.midX = fabBg.midX
	feedBg.midY = fabBg.midY
	
	feedBg.placeBehind container
	
	spinner.start()
	
	fabBg.animate
		scale: 1
		options: curve: "spring(300, 15, 0)"
		
	fab.animate
		scale: 0, opacity: 0

	Utils.delay 2, ->
		spinner.stop()
		container.draggable.enabled = false
		
		fabBg.parent = container
		fabBg.placeBehind menu
		
		fabBg.animate
			scale: 0

		navBarBg.animate
			opacity: 0
		
		feedBg.animate
			scale: 1, opacity: 1
			options: curve: "spring(140, 30, 0)"
			
		menu.animate
			y: Align.bottom(1)
			
		header.animate
			y: 0, opacity: 1
			
		cardalight.animate
			opacity: 1, x: -20, y: -16
			
		cardadark.animate
			opacity: 0, x: -20, y: -16
			
		cardblight.animate
			opacity: 1, x: -20, y: -16
			
		cardbdark.animate
			opacity: 0, x: -20, y: -16
			
		titleLight.animate
			opacity: 1, y: sc 300
			
		titleDark.animate
			opacity: 0, y: sc 300, 

		mic.animate
			x: Align.right sc -38
		
		searhBox.animate
			width: sc(372)
			x: sc(20)
			y: sc(152)
			backgroundColor: "white"
			
		glassLight.animate
			opacity: 1
		
		glassDark.animate
			opacity: 0
		
		cardA.animate 
			height: sc(268)
			y: sc(344)
			backgroundColor: "white"
			width: sc 396
			x: sc 8
		
		cardB.animate
			y: sc(620)
			backgroundColor: "white"
			width: sc 396
			x: sc 8

closeApp = ->
	container.draggable.enabled = true
	
	container.animate 
		x: -Screen.width
		
	navBarBg.animate
		opacity: 1
		
	container.once Events.AnimationEnd, ->
		for layer in Framer.CurrentContext.layers
			layer.stateSwitch "default"
		fabBg.parent = null
	
# Events

containerDrag = (event) ->
	dragMinusOne()
	bgParallax()
	navBarCollapse()
	fabTransition()
	
containerDragEnd = (event) ->
	openCloseMinus(event)
	
fabBgTapEnd = ->
	transformLight()
	
fabBgTapStart = ->
	fabPressed()
	
navBarTap = ->
	closeApp()

container.on "change:x", containerDrag	
container.on Events.DragEnd, containerDragEnd

fabBg.on Events.TapEnd, fabBgTapEnd
fabBg.on Events.TapStart, fabBgTapStart

navbar.on Events.Tap, navBarTap
