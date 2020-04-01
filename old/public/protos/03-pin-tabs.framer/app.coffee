Utils.insertCSS("@import url(https://fonts.googleapis.com/css?family=Roboto);")

CURVE = "spring(260, 30, 0, 0.014)"

bg = new BackgroundLayer image: "images/bg.png"

class Pages extends PageComponent
	constructor: ->
		@allPages = []
	
		super
			y: 256
			width: Screen.width - 274, height: Screen.height - 256
			scrollVertical: false
			clip: false
			
		@centerX()
			
		@content.draggable.directionLock = true
		@content.draggable.overdragScale = 0.15
		
		#Events
		
		@on "change:currentPage", => page.toggleEvents(@) for page in @allPages
		@content.on "change:x", => page.autoScale() for page in @allPages
		
	createTab: (index) =>
		tab = new Tab(@, index)
		@snapToPage(tab, false)

class Tab extends Layer
	constructor: (carrousel, index) ->
		super
			x: carrousel.width * index
			size: carrousel.size
			superLayer: carrousel.content
			backgroundColor: null
		
		@wrapper = new Layer
			size: @size
			backgroundColor: @backgroundColor
			superLayer: @
			originY: 0.38
		
		@wrapper.draggable.enabled = true	
		@wrapper.draggable.horizontal = false
		@wrapper.draggable.directionLock = true
		
		@swipe = new Layer
			x: 80, y: 100
			width: 294, height: 32
			image: "images/swipe.png"
			superLayer: @wrapper
		
		thumbnail = new Layer
			y: 96
			width: 458, height: 592
			borderRadius: 2
			superLayer: @wrapper
			image: resultsJSON[index].image
		
		thumbnail.centerX()
		
		@favicon = new Layer
			y: 628
			width: 128, height: 128
			superLayer: @wrapper
			image: resultsJSON[index].favicon
			
		@favicon.centerX()
		
		@title = new Layer
			y: 780
			width: thumbnail.width, height: 38
			backgroundColor: null
			superLayer: @wrapper
			html: resultsJSON[index].title
			style: 
				"font": "32px Roboto-Regular"
				"text-align": "center"
				"-webkit-font-smoothing": "antialiased"
		
		@title.centerX()
			
		@url = new Layer
			y: @title.y + 60
			width: thumbnail.width, height: 30
			backgroundColor: null
			superLayer: @wrapper
			html: resultsJSON[index].url
			style:
				"font": "24px Roboto-Regular"
				"color": "rgba(255, 255, 255, 0.38)"
				"text-align": "center"
				"-webkit-font-smoothing": "antialiased"
				
		@url.centerX()
		
		carrousel.allPages.push @
		
		pins.createPin(@favicon)
		
		#Events
			
		@wrapper.on "change:y", =>
			pins.allPins[index].modulation(@wrapper)
			pins._hintModulation(@wrapper)

			@swipe.y = Utils.modulate(@wrapper.y, [0, 200], [120, 20], true)
		
		@wrapper.on Events.DragEnd, =>
			@_triggerDragListener(carrousel, index) if carrousel.currentPage is @
		
		@on "change:x", @autoScale
	
	toggleEvents: (carrousel) =>
		@wrapper.ignoreEvents = 
			if @ isnt carrousel.currentPage or carrousel.allPages.length is 1 then true else false

	autoScale: =>
		midX = @wrapper.screenFrame.x + (@wrapper.width / 2)
		distance = Math.round((midX / Screen.width) * 100) / 100
		mappedDistance = Utils.modulate(distance, [-0.13, 1.13], [Math.PI * -0.5, Math.PI * 1.5], true)

		@wrapper.scale = Utils.modulate(Math.sin(mappedDistance), [-1, 1], [0.92, 1], true)
		@wrapper.opacity = Utils.modulate(Math.sin(mappedDistance), [-1, 1], [0.5, 1], true)
		@title.opacity = @url.opacity = Utils.modulate(Math.sin(mappedDistance), [-1, 1], [0, 1], true)
	
	_triggerDragListener: (carrousel, index) =>
		toPin = @wrapper.screenFrame.y < -50
		toRemove = @wrapper.screenFrame.y > 650
		
		if toPin
			offScreenTopAnimation = @wrapper.animate
				properties: y: -@wrapper.height + 210, opacity: 0
				curve: "spring(220, 30, #{Math.abs(@wrapper.draggable.velocity.y) * 2}, 0.05)"
			
			offScreenTopAnimation.once Events.AnimationEnd, => 
				@_repositionPages(carrousel)
				pins.allPins[index].reposition()
				pins._hintReposition()
				pins._hintFadeIn()
						
		else if toRemove
			offScreenBottomAnimation = @wrapper.animate
				properties: y: Screen.height - 340
				curve: "spring(260, 30, #{Math.abs(@wrapper.draggable.velocity.y) * 2}, 0.05)"
				
			@swipe.animate
				properties: opacity: 0 
				curve: "spring(260, 30, #{Math.abs(@wrapper.draggable.velocity.y) * 2}, 0.05)"
				
			offScreenBottomAnimation.once Events.AnimationEnd, => 
				@_repositionPages(carrousel)
		else
			@wrapper.animate
				properties: y: 0
				curve: CURVE	
		
	_repositionPages: (carrousel) =>
		removed = carrousel.allPages.indexOf(@)
		
		removedIsFirst = removed is 0
		removedIsLast = removed is carrousel.allPages.length - 1
		removedIsMiddle = not removedIsLast and not removedIsFirst
		
		for page in carrousel.allPages
			self = carrousel.allPages.indexOf(page)
			
			pageLeft = self < removed
			pageRight = self > removed

			if pageLeft and removedIsLast
				page.animate
					properties: x: page.x + page.width
					curve: CURVE	
			
			else if pageRight and (removedIsFirst or removedIsMiddle)
				page.animate
					properties: x: page.x - page.width
					curve: CURVE

			page.on Events.AnimationEnd, ->
				carrousel.snapToPage(carrousel.closestPage, false)

		@_destroy(carrousel, removed)	
			
	_destroy: (carrousel, removed) =>
		carrousel.allPages.splice(removed, 1)
		@destroy()


class Pins extends ScrollComponent
	constructor: ->
		@allPins = []
		@pinsInScrollComponent = []

		super
			width: Screen.width, height: pages.y
			backgroundColor: null
			scrollVertical: false	
			
		@hint = new Layer
			y: 142, x: 160
			width: 402, height: 32
			image: "images/move-tabs.png"
			superLayer: @content
			
	createPin: (props) =>
		pin = new Pin(@, props)
		
	_hintModulation: (pageWrapper) =>
		@hint.opacity = Utils.modulate(pageWrapper.y, [0, -400], [1, 0], true)
		
	_hintReposition: =>
		@hint.x += 52
		@hint.scale -= 0.04 if @pinsInScrollComponent.length > 1
		
	_hintFadeIn: =>
		if @pinsInScrollComponent.length < 4
			@hint.animate
				properties: opacity: 1
				curve: CURVE


class Pin extends Layer
	constructor: (scroll, props) ->
		super
			y: pages.y
			size: props.size
			image: props.image
			superLayer: scroll.content

		@centerX()
		
		scroll.allPins.push @
	
	modulation: (pageWrapper) =>
		@y = Utils.modulate(pageWrapper.y, [-100, -600], [256, 96], true)
		@scale = Utils.modulate(pageWrapper.y, [-100, -600], [1, 0.6], true)
		
	reposition: =>
		pins.pinsInScrollComponent.push @
		newIndex = pins.pinsInScrollComponent.indexOf(@)
		
		@animate
			properties: x: 94 * newIndex
			curve: CURVE
			

#Let the magic begins

resultsJSON = JSON.parse(Utils.domLoadDataSync("data.json"))
resultsJSON.reverse()

pages = new Pages
pins = new Pins

pages.createTab(i) for result, i in resultsJSON