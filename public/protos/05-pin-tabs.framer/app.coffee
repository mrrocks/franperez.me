Utils.insertCSS("@import url(https://fonts.googleapis.com/css?family=Roboto);")
Framer.Device.deviceScale = 0.5

CURVE = "spring(280, 30, 0, 0.015)"

bg = new BackgroundLayer image: "images/bg.png"

class Pages extends PageComponent
	constructor: ->
		@allPages = []
		@bouncingCurve = "spring(260, 20, 0, 0.015)"

		super
			width: Screen.width - 274, height: 1136
			scrollVertical: false
			clip: false
			animationOptions: curve: "cubic-bezier(0, 0, 0.2, 1)", time: 0.25

		@centerX()

		@content.draggable.directionLock = true
		@content.draggable.overdragScale = 0.15

		@button = new Layer
			y: 40, x: 314
			width: 116, height: 116
			backgroundColor: null
			scale: 0.84

		@button.states.add("visible": scale: 1)

		@buttonWhiteBg = new Layer
			width: 116, height: 116
			image: "images/white-button.png"
			superLayer: @button

		@buttonWhiteBg.states.add("visible": opacity: 0)

		@addIcon = new Layer
			y: 40
			width: 28, height: 28
			image: "images/add-icon.png"
			superLayer: @button
			scale: 1.1

		@addIcon.centerX()

		@buttonRedBg = new Layer
			width: 116, height: 116
			image: "images/red-button.png"
			superLayer: @button
			opacity: 0

		@buttonRedBg.states.add("visible": opacity: 1)

		@removeIcon = new Layer
			y: 38
			width: 24, height: 32
			image: "images/remove-icon.png"
			superLayer: @button
			scale: 0.5
			opacity: 0

		@removeIcon.centerX()

		@removeIcon.states.add("visible": scale: 1, opacity: 1, rotationZ: 0)

		#Events

		@on "change:currentPage", => page.toggleEvents(@) for page in @allPages
		@content.on "change:x", => page.autoScale() for page in @allPages

	addToRemove: =>
		@removeIcon.states.switch "visible", curve: @bouncingCurve
		@buttonRedBg.states.switch "visible", curve: @bouncingCurve
		@buttonWhiteBg.states.switch "visible", time: 0.5
		@button.states.switch "visible", curve: @bouncingCurve

	removeToAdd: =>
		@removeIcon.states.switch "default", curve: @bouncingCurve
		@buttonRedBg.states.switch "default", curve: @bouncingCurve
		@buttonWhiteBg.states.switch "default", time: 0.5
		@button.states.switch "default", curve: @bouncingCurve

	selectButtonState: (wrapper) =>
		movingUp = wrapper.y < -120 and @removeIcon.states.state is "default" and wrapper.draggable.direction is "up"
		movingDown = wrapper.y > -120 and @removeIcon.states.state is "visible" and wrapper.draggable.velocity.y >= 0

		@addToRemove() if movingUp
		@removeToAdd() if movingDown

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
			perspective: 600

		@wrapper = new Layer
			size: @size
			backgroundColor: @backgroundColor
			superLayer: @
			originY: 0.48

		@wrapper.draggable.enabled = true
		@wrapper.draggable.horizontal = false
		@wrapper.draggable.directionLock = true

		thumbnail = new Layer
			y: 260
			width: 458, height: 592
			borderRadius: 2
			superLayer: @wrapper
			image: resultsJSON[index].image

		thumbnail.centerX()

		@favicon = new Layer
			y: thumbnail.y + 530
			width: 128, height: 128
			image: resultsJSON[index].favicon
			superLayer: @wrapper

		@favicon.centerX()

		@title = new Layer
			y: thumbnail.y + 672
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
			y: @title.y + 64
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
			pins.allPins[index].modulation(@wrapper, @favicon)
			pins._hintModulation(@wrapper)
			carrousel.selectButtonState(@wrapper)

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
		toPin = @wrapper.screenFrame.y > 240
		toRemove = @wrapper.screenFrame.y < -140

		if toPin
			offScreenTopAnimation = @wrapper.animate
				properties: y: Screen.height - 448
				curve: "spring(260, 30, #{Math.abs(@wrapper.draggable.velocity.y)}, 0.05)"

			offScreenTopAnimation.once Events.AnimationEnd, =>
				@_repositionPages(carrousel)
				pins.allPins[index].reposition()
				pins._hintReposition()
				pins._hintFadeIn()

		else if toRemove
			offScreenBottomAnimation = @wrapper.animate
				properties: y: -416, scale: 0, rotationX: 4, opacity: 0.6
				curve: "spring(260, 30, 0}, 0.05)"

			offScreenBottomAnimation.once Events.AnimationEnd, =>
				@_repositionPages(carrousel)
		else
			@wrapper.animate
				properties: y: 0
				curve: CURVE

			Utils.delay 0.1, -> carrousel.removeToAdd()

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

		carrousel.removeToAdd()

		@_destroy(carrousel, removed)

	_destroy: (carrousel, removed) =>
		carrousel.allPages.splice(removed, 1)
		@destroy()


class Pins extends ScrollComponent
	constructor: ->
		@allPins = []
		@pinsInScrollComponent = []

		super
			maxY: Screen.height
			width: Screen.width, height: 198
			scrollVertical: false
# 			clip: false

		@hint = new Layer
			y: 86, x: 160
			width: 394, height: 32
			image: "images/move-tabs.png"
			superLayer: @content

	createPin: (props) =>
		pin = new Pin(@, props)

	_hintModulation: (pageWrapper) =>
		if @pinsInScrollComponent.length < 3
			@hint.opacity = Utils.modulate(pageWrapper.y, [280, 404], [1, 0], true)

	_hintReposition: =>
		@hint.x += 58

	_hintFadeIn: =>
		if @pinsInScrollComponent.length < 3
			@hint.animate
				properties: opacity: 1
				curve: CURVE


class Pin extends Layer
	constructor: (scroll, originalFavicon) ->
		super
			y: -136
			size: originalFavicon.size
			image: originalFavicon.image
			superLayer: scroll.content
			originY: 0
			backgroundColor: "red"

		scroll.allPins.push @

	modulation: (pageWrapper, originalFavicon) =>
		@x = originalFavicon.screenFrame.x if @y < 52

		@scale = Utils.modulate(pageWrapper.y, [306, 406], [1, 0.64], true)
		@y = Utils.modulate(pageWrapper.y, [224, 406], [-124, 64], true)

	reposition: =>
		pins.pinsInScrollComponent.push @
		newIndex = pins.pinsInScrollComponent.indexOf(@)

		@animate
			properties: x: 10 + (100 * newIndex)
			curve: CURVE


#Let the magic begins

resultsJSON = JSON.parse(Utils.domLoadDataSync("data.json"))
resultsJSON.reverse()

pages = new Pages
pins = new Pins

pages.createTab(i) for result, i in resultsJSON
