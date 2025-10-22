Material = require "material"
{TextLayer} = require "TextLayer"

Framer.Extras.Preloader.enable()
Framer.Extras.Hints.disable()
Framer.Device.setDeviceScale(.35)
Framer.Defaults.Animation.curve = "spring(260, 30, 0, 0.01)"

# Helper Functions

slowTime = 0.0025

Framer.DefaultContext.run ->
	DEFAULT_SPEED = Framer.Loop.delta
	isSlow = true
	
	button = new Layer
		size: 60
		point: 15
		borderRadius: "50%"
		backgroundColor: "BDBDBD"
		html: "slow"
		style: 
			"padding-top": "21px"
			"text-align": "center"
			"font": "400 12px Roboto Mono"
	
	button.onTap ->
		if isSlow
			button.backgroundColor = "4285F4"
			Framer.Loop.delta = slowTime
		else
			button.backgroundColor = "BDBDBD"
			Framer.Loop.delta = DEFAULT_SPEED
			
		isSlow = !isSlow

f = (val) ->
	Math.round val * 2.6223
	
t = (val) ->
	if not isSlow
		val * 3
	else
		val

sc = (from, to) -> to / from

Layer::rippleStart = (event) ->
	point = Utils.convertPointFromContext(event.touchCenter, this, true, true)
	
	this.clip = true

	ripple = new Layer
		midX: if Utils.isPhone() then point.x else event.offsetX
		midY: if Utils.isPhone() then point.y else event.offsetY
		size: this.width * 1.2
		backgroundColor: "black"
		borderRadius: "50%"
		opacity: 0.08
		parent: this
		scale: 0.04
	
	ripple.sendToBack()
	
	ripple.animate
		properties: scale: 2.2
		curve: "spring(180, 50, 0, 0.01)"

	this.fadeOut = new Animation
		layer: ripple
		properties: opacity: 0
		curve: "spring(180, 50, 0, 0.01)"
		
Layer::rippleEnd = ->
	this.fadeOut.start()
	
	this.fadeOut.once Events.AnimationEnd, -> 
		this._target.destroy()
		this.clip = false


Screen.backgroundColor = "F2F2F2"

shortcuts = [
	{
		name: "weather"
		height: 1798
	}
	{
		name: "dining"
		height: 1851
	}
	{
		name: "entertainment"
		height: 1455
	}
	{
		name: "sports"
		height: 1455
	}
]

shortcutSize = width: f(82), height: f(72)
transitionLayers = null
spinnerSize = 20
isSlow = null

# Layers

logo = new Layer
	x: Align.center
	y: f(91)
	width: 309
	height: 100
	image: "images/logo.png"

container = new Layer
	backgroundColor: null
	y: f(208)
	x: f(20)
	width: f(369)
	image: "images/chevron.png"
	style: 
		"background-size": "18px 31px"
		"background-position": "right center"

for shortcut, i in shortcuts
	shortcut = new Layer
		x: (shortcutSize.width + f(8)) * i
		parent: container
		size: shortcutSize
		backgroundColor: "transparent"
		name: shortcuts[i].name
		borderRadius: f(2)
		
	shortcut.bgImage = new Layer
		size: shortcutSize
		image: "images/#{shortcuts[i].name}.png"
		parent: shortcut
		originY: 1
		
	shortcut.srp = new Layer
		y: f(344)
		width: 1080
		height: shortcuts[i].height
		image: "images/srp-#{shortcuts[i].name}.png"
		opacity: 0
		
	shortcuts[i] = shortcut

feed = new Layer
	y: f(300)
	width: 1080
	height: 1481
	image: "images/feed.png"
	
searchBox = new Layer
	x: f(20)
	y: f(152)
	width: f(372)
	height: f(44)
	backgroundColor: "white"
	borderRadius: f(2)
	shadowY: f(1)
	shadowBlur: f(2)
	shadowColor: "rgba(0, 0, 0, 0.24)"
	clip: true

mic = new Layer
	parent: searchBox
	y: Align.center
	x: Align.right(-f(12))
	width: 37
	height: 52
	image: "images/mic.png"

search = new Layer
	parent: searchBox
	y: f(13)
	x: f(13)
	width: 45
	height: 45
	image: "images/search.png"

corpus = new Layer
	parent: searchBox
	width: 1038
	height: 107
	y: searchBox.height - 1
	image: "images/corpus.png"
	opacity: 0
	
label = new TextLayer
	parent: searchBox
	autoSize: true
	y: Align.center(f(2))
	x: f(46)
	fontSize: f(14)
	lineHeight: 0
	fontFamily: "Roboto"
	text: ""
	color: "757575"
	opacity: 0
	scale: 1

menu = new Layer
	width: 1080
	height: 126
	y: Align.bottom(-108)
	image: "images/menu.png"

keyboard = new Layer
	width: 1080
	height: 679
	y: Screen.height - 126
	image: "images/keyboard.png"

navbar = new Layer
	y: Align.bottom(2)
	width: 1080
	height: 126
	image: "images/navbar.png"

status = new Layer
	width: 1080
	height: 63
	image: "images/status.png"
	
statusWhite = new Layer
	width: 1080
	height: 63
	opacity: 0
	image: "images/status-white.png"

shortcut.srp.placeBefore(searchBox) for shortcut, i in shortcuts when i isnt 0

layer.states.default for layer in Framer.CurrentContext.layers

# Logic

createSpinner = (parent) ->
	parent.spinner = new Material.Spinner
		parent: parent
		size: spinnerSize
		thickness: 2.5
		color: "B3B3B3"
		changeColor: no
		x: Align.center(-spinnerSize)
		y: Align.center(-spinnerSize)
		
	parent.spinner.start()

destroySpinner = (shortcut) ->
	duration = 0.2
	shortcut.isLoading = false
	
	shortcut.spinner.animate
		opacity: 0, scale: 0
		options: time: duration, curve: "ease"
	
	Utils.delay duration, ->
		shortcut.spinner.destroy()
# 		shortcut.spinner = null
		
showIcon = (shortcut) ->
	shortcut.bgImage.animate
		opacity: 1, scale: 1

hideIcon = (shortcut) ->
	shortcut.bgImage.animate
		opacity: 0, scale: 0.8

load = (shortcut) ->
	cancelAllLoadings()
	
	shortcut.isLoading = true
	
	createSpinner(shortcut)
	hideIcon(shortcut)
	
	shortcut.timer = setInterval -> 
		cancelLoading(shortcut)
		openSRP(shortcut)
	, 1200
	
cancelAllLoadings = ->
	cancelLoading(shortcut) for shortcut in shortcuts when shortcut.isLoading
	
cancelLoading = (shortcut) ->
	clearInterval(shortcut.timer)
	destroySpinner(shortcut)
	showIcon(shortcut)
	enableTaps(shortcut)

shorcutOnTapStart = (event) ->	
	this.rippleStart(event)
	this.off Events.TapStart, shorcutOnTapStart

shorcutOnTapEnd = ->
	load(this)
	
	this.rippleEnd()

	this.off Events.TapEnd, shorcutOnTapEnd
	
enableTaps = (shortcut)->
	shortcut.on Events.TapStart, shorcutOnTapStart
	shortcut.on Events.TapEnd, shorcutOnTapEnd

# Transition

openSRP = (shortcut)->
	populateSearchbox(shortcut)
	animateSRP(shortcut)
	deactivateShortcuts()
	
populateSearchbox = (shortcut) ->
	label.animate 
		opacity: 1
	
	label.text = shortcut.name.charAt(0).toUpperCase() + shortcut.name.slice(1)

deactivateShortcuts = ->
	shortcut.ignoreEvents = true for shortcut in shortcuts

animateSRP = (shortcut) ->
	
	fullScreenWithSearch = shortcut is shortcuts[0]
	fullScreen = shortcut is shortcuts[1]
	halfScreen = shortcut is shortcuts[2] or shortcut is shortcuts[3]
	
	if fullScreenWithSearch
		searchBox.animate 
			y: f(32), width: f(396), x: f(8)
		
		logo.animate 
			y: logo.y - f(120), opacity: 0
		
		container.animate 
			y: container.y - f(120), opacity: 0
			
		shortcut.srp.animate 
			y: f(0), opacity: 1
		
		feed.animate 
			y: -f(46), opacity: 0
			
		mic.animate
			x: mic.x + f(24)
			
		statusWhite.animate
			opacity: 1
			
		status.animate
			opacity: 0
	
	else if fullScreen
		shortcut.srp.animate 
			y: f(24), opacity: 1
		
		feed.animate 
			y: -f(20), opacity: 0
			
		searchBox.animate 
			y: f(84 - 240)
		
		logo.animate 
			y: f(37 - 240)
		
		container.animate 
			y: f(138 - 240)
	
	else if halfScreen
		container.animate
			opacity: 0, y: f(138)
		
		mic.animate
			x: mic.x + f(24)
			
		corpus.animate
			opacity: 1
			
		shortcut.srp.animate
			opacity: 1, y: f(176)
			
		feed.animate
			opacity: 0, y: f(132)

		searchBox.animate
			width: f(396), y: f(84), x: f(8), height: f(84)
			
		logo.animate
			scale: sc(309, f(96)), y: f(37)
		
	menu.animate
		y: menu.y + menu.height	
		
	transitionLayers = [statusWhite, status, searchBox, logo, container, feed, mic, menu, corpus, shortcut.srp]

closeSRP = (shortcut)->
	activateShortcuts()
	expandHeader()

expandHeader = ->
	layer.animate "default" for layer in transitionLayers
	
	label.animate
		opacity: 0

activateShortcuts = ->
	shortcut.ignoreEvents = false for shortcut in shortcuts

openSuggest = ->
	searchBox.animate 
		y: f(32), width: f(396), x: f(8), height: f(200)
		
	container.animate
		y: f(138)
		
	keyboard.animate
		maxY: Screen.height - 126
	
	feed.animate 
		y: feed.y + f(124)
		
	mic.animate
		x: mic.x + f(24)
		
	logo.animate
		scale: sc(309, f(96)), y: f(37)
		
	transitionLayers = [logo, keyboard, searchBox, container, feed, mic, menu]

# Events

backOnTap = (event) ->
	closeSRP(this)

searchBoxOnTapEnd = ->
	deactivateShortcuts()
	cancelAllLoadings()
	openSuggest()

for shortcut, i in shortcuts
	shortcut.on Events.TapStart, shorcutOnTapStart
	shortcut.on Events.TapEnd, shorcutOnTapEnd

navbar.on Events.TapStart, backOnTap

searchBox.on Events.TapEnd, searchBoxOnTapEnd
