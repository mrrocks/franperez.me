# Defaults
Framer.Extras.Preloader.enable()
Framer.Extras.Hints.disable()
Framer.Defaults.Animation = curve: "spring(250, 30, 5, 0.01)"
Screen.backgroundColor = "F2F2F2"

bg = new Layer
	x: Align.center, y: Align.bottom
	width: 728
	height: 1324
	image: "images/bg.png"

# Utils

pt = (px) -> Math.round(px * 2)

sc = (from, to) -> to / from

Array::move = (from, to) ->
	this.splice(to, 0, this.splice(from, 1)[0])

Layer::rippleStart = (event) ->
	curve = "spring(120, 30, 0, 0.01)"

	point = Utils.convertPointFromContext(event.touchCenter, this, true, true)
	
	this.clip = true

	ripple = new Layer
		midX: if Utils.isPhone() then point.x else event.offsetX
		midY: if Utils.isPhone() then point.y else event.offsetY
		size: this.width * 1.2
		backgroundColor: "black"
		borderRadius: "50%"
		opacity: 0.06
		parent: this
		scale: 0.04
	
	ripple.sendToBack()
	
	ripple.animate
		properties: scale: 2
		curve: curve
		
	this.fadeOut = new Animation
		layer: ripple
		properties: opacity: 0
		curve: curve
		
Layer::rippleEnd = ->
	this.fadeOut.start()
	this.fadeOut.once Events.AnimationEnd, -> this._target.destroy()

# Remover

class Remover extends Layer
	
	VISIBLE_HEIGH = Align.bottom(pt(-63))
	
	constructor: (options = new Object) ->
		super _.defaults options,
			size: pt(54)
			x: Align.center, y: Align.bottom(24)
			backgroundColor: "transparent"
			name: "remover"
			
		this.background = new Layer
			point: pt(-15)
			parent: this
			size: pt(84)
			scale: sc(pt(84), pt(54))
			borderRadius: pt(54)
			backgroundColor: "525252"
			shadowBlur: pt(12)
			shadowY: pt(4)
			shadowColor: "rgba(0, 0, 0, 0.32)"
			
		this.label = new Layer
			x: pt(2)
			y: Align.center
			width: 468
			height: 26
			image: "images/label.png"
			parent: this
			opacity: 0

		this.ex = new Layer
			point: Align.center
			width: 28
			height: 28
			image: "images/x.png"
			parent: this
	hide: ->
		this.animate
			properties: x: this.orgProps.x, y: this.orgProps.y
	
	show: -> 
		this.animate
			properties: y: VISIBLE_HEIGH
			delay: 0.2
			curve: "spring(260, 20, 0, 0.005)"
			
		this.background.animate
			properties: this.backgroundColor.orgProps

	gravity: (shorcut) =>
		this.x = Utils.modulate(shorcut.x
			[shorcut.orgProps.x, shorcut.orgProps.x + 60]
			[this.orgProps.x, this.orgProps.x - 6]
			false
		)
	
	grab: (curve) ->
		this.animate
			properties: y: Align.bottom(pt(-79))
		
		this.background.animate
			properties: scale: 1
			curve: curve
		
	release: (curve) ->
		this.animate
			properties: y: VISIBLE_HEIGH
			
		this.background.animate
			properties: scale: sc(pt(84), pt(54))
			curve: curve
	
	remove: ->
		this.animate
			properties: y: VISIBLE_HEIGH
			
		this.ex.animate
			properties: scale: 0, opacity: 0
			
		removeAnimation = this.background.animate
			properties: scale: sc(pt(84), pt(40))
			curve: "spring(260, 14, 0, 0.005)"
			
		removeAnimation.on Events.AnimationEnd, this._chip
	
	_chip: =>
		this.animate
			properties: x: 100
			
		this.label.animate
			properties: opacity: 1
		
		this.background.animate
			properties: width: pt(560), originX: 0
			
		this.animate
			properties: y: this.orgProps.y
			delay: 2
			
		Utils.delay 2.4, => this._reset()			
	_reset: ->
		this.props = this.orgProps
		this.background.props = this.background.orgProps
		this.label.props = this.label.orgProps
		this.ex.props = this.ex.orgProps
				

# Shorcut

class Shortcut extends Layer
	constructor: (options = new Object) ->
		super _.defaults options,
			size: pt(74)
			backgroundColor: "transparent"
		
		this.background = new Layer
			parent: this
			size: pt(96)
			point: pt(-10)
			scale: sc(pt(96), pt(74))
			borderRadius: pt(4)
			backgroundColor: "transparent"

		this.icon = new Layer
			point: Align.center
			parent: this
			width: 148
			height: 120
			image: "images/#{this.image}.png"
			style: "background-position": "top"
			
		this.dummy = new Image
		this.dummy.src = "images/#{this.image}-white.png"

		this.draggable.enabled = true
		this.draggable.momentum = false
		
		this.remover = new Remover
			parent: this.parent
		
		# Events
		
		this.on Events.TapStart, (event) -> this.background.rippleStart(event)
		this.on Events.TapEnd, -> this.background.rippleEnd() 
		
		this.on Events.LongPressStart, this.grab
		this.on Events.LongPressEnd, this.release
		
		this.on Events.DragMove, this.blockDragging
		
		this.on "change:y", this.moveRest
		
	blockDragging: ->
		this.y = this.orgProps.y
		this.x = this.orgProps.x

	moveRest: ->
		for shorcut, i in this.parent.allShortcuts when i > this.parent.allShortcuts.indexOf(this)

			shorcut.x = Utils.modulate(this.y
				[100, 500]
				[shorcut.orgProps.x, shorcut.orgProps.x - (shorcut.width + pt(4))]
				true
			)

			if i is 4
				shorcut.opacity = Utils.modulate(this.y
					[312, 500]
					[0, 1]
					true
				)
	
	_isOverlapping: (targetLayer, offset = pt(-12)) ->
		if @screenFrame.x + @width + offset >= targetLayer.screenFrame.x &&
		@screenFrame.x - offset <= targetLayer.screenFrame.x + targetLayer.width &&
		@screenFrame.y + @height + offset >= targetLayer.screenFrame.y &&
		@screenFrame.y - offset <= targetLayer.screenFrame.y + targetLayer.height
			true
		else
			false
		
	_isDragging: ->
		this.remover.gravity(this)
		
		curve = "spring(260, 30, 15, 0.005)"
		
		if this._isOverlapping(this.remover)
			this.background.animate
				properties: scale: 0.5
				curve: curve
				
			this.icon.animate
				properties: height: pt(28), y: pt(20)
				curve: curve
				
			this.remover.grab(curve)
		else if not this._isOverlapping(this.remover) and this.y isnt this.orgProps.y
			this.background.animate
				properties: scale: 1
				curve: curve
				
			this.icon.animate
				properties: height: this.icon.orgProps.height, y: 0
				curve: curve
				
			this.remover.release(curve)
	
	grab: ->
		this.remover.bringToFront()
		this.bringToFront()
		
		this.icon.animate
			properties: y: this.icon.y - pt(8)
			curve: "spring(260, 14, 0, 0.005)"
		
		this.background.animate
			properties: scale: 1, y: this.background.y - pt(8)
			curve: "spring(260, 14, 0, 0.005)"
		
		this.background.animate
			properties:
				backgroundColor: "4285F4"
				borderRadius: "100%"
				rotationZ: 140
				shadowBlur: pt(16)
				shadowY: pt(-4)
				shadowX: pt(4)
				shadowColor: "rgba(0, 0, 0, 0.32)"
		
		this.icon.image = "images/#{this.image}-white.png"
		
		this.background.rippleEnd()
		
		this.off Events.DragMove, this.blockDragging
		this.on Events.DragMove, this._isDragging
		
		this.remover.show()
	
	backToPosition: ->
		this.animate
			properties: x: this.orgProps.x, y: this.orgProps.y
			curve: "spring(260, 25, 0, 0.005)"
		
		this.icon.animate
			properties: 
				y: this.icon.y + pt(8)
				height: this.icon.orgProps.height
			curve: "spring(240, 30, 0, 0.01)"
		
		this.background.animate
			properties:
				y: this.background.y + pt(8)
				scale: 0
				opacity: 0
			curve: "spring(240, 30, 0, 0.01)"
		
		this.icon.image = "images/#{this.image}.png"
		
		this.background.once Events.AnimationEnd, -> this.props = this.orgProps
		
		this.off Events.DragMove, this._isDragging
		this.on Events.DragMove, this.blockDragging
		
		this.remover.hide()
	
	remove: ->
		removeAnimation = this.animate
			properties: 
				scale: 0
				midX: this.remover.midX
				midY: this.remover.midY + pt(14)
			
		this.remover.remove()
		
		removeAnimation.once Events.AnimationEnd, this._reposition
	
	_reposition: =>
		this.parent.allShortcuts.move(this.parent.allShortcuts.indexOf(this), this.parent.allShortcuts.length)
			
		shorcut.orgProps.x = shorcut.x for shorcut in this.parent.allShortcuts
		
		this.props = _.assign this.orgProps,
			x: this.parent.allShortcuts.indexOf(this) * (this.width + pt(4))
			opacity: 0
		
		this.background.props = this.background.orgProps
		this.icon.props = this.icon.orgProps
		
		this.off Events.DragMove, this._isDragging
		this.on Events.DragMove, this.blockDragging
		
	release: ->
		if this._isOverlapping(this.remover)
			this.remove()
		else
			this.backToPosition()

# Shorcuts

class Shorcuts extends Layer
	constructor: (options = new Object) ->
		this.allShortcuts = []
		
		super _.defaults options,
			width: pt(331), height: Screen.height - pt(210)
			x: pt(20), y: pt(210)
			backgroundColor: "transparent"
		
		arrow = new Layer
			x: Align.right, y: pt(32)
			width: 16
			height: 24
			image: "images/arrow.png"
			parent: this
		
		this.createShortcuts(i) for i in [0...5]
		
		this._setOrgProps()
		
		menu = new Layer
			y: Align.bottom
			width: 750
			height: 100
			image: "images/menu.png"
	
	_setOrgProps: ->
		layer.orgProps = layer.props for layer in Framer.CurrentContext.layers
	
	createShortcuts: (i) ->
		shorcut = new Shortcut
			x: i * (pt(74) + pt(4))
			image: "shortcut-#{i + 1}"
			name: i + 1
			opacity: 0 if i is 4
			parent: this
			
		this.allShortcuts.push shorcut 

shorcuts = new Shorcuts
