helpers = require "helpers"
layers = require "layers"

Utils.globalLayers(layers)

isKeyboardVisible = null
mobileExtraSpeed = if Utils.isMobile() then 20 else 0

OPEN_APP_CURVE = "spring(#{210 + mobileExtraSpeed}, 28, 0, 0)"
CURVE = "spring(#{260 + mobileExtraSpeed}, 30, 0)"
SLOW_CURVE = "spring(#{160 + mobileExtraSpeed}, 30, 0)"

Framer.Defaults.Animation = curve: CURVE

openApp = ->
	grayBackground.opacity = 0.5

	iosHomeContent.animate
		properties: scale: 6, opacity: 0
		curve: OPEN_APP_CURVE

	grayBackground.animate
		properties: scaleX: 1, scaleY: 1, opacity: 1, borderRadius: 0
		curve: OPEN_APP_CURVE

	googleAppIcon.animate
		properties:
			scaleY: helpers.scaleToSize googleAppIcon.width, Screen.height
			scaleX: helpers.scaleToSize googleAppIcon.width, Screen.width
			opacity: 0
		curve: OPEN_APP_CURVE

	Utils.delay 1.5, ->
		splashToHome()
		iosHomeContent.destroy()
		iosHomeBackground.destroy()
		googleAppIcon.destroy()

googleAppIcon.on Events.TouchStart, -> googleAppIcon.brightness = 75
googleAppIcon.on Events.TouchEnd, openApp

# Animation from the splash screen to the home with the search ready

splashToHome = ->
	searchBox.visible = true
	searchBox.scaleY = 0
	home.addSubLayer grayBackground
	grayBackground.index = 0

	openSearchHome()

	Utils.delay 0.1, openSearchBoxHome

	cards.on Events.Click, ->
		if cards.states.state is "pick"
			closeSearchHome()
			closeSearchBoxHome()

# Blinker

blinkerAnimation = new Animation
	layer: blinker
	properties: opacity: 1
	curve: "ease-out", time: "0.45"

blinkerAnimationReversed = blinkerAnimation.reverse()

blinkerAnimation.on Events.AnimationEnd, blinkerAnimationReversed.start
blinkerAnimationReversed.on Events.AnimationEnd, blinkerAnimation.start

stopBlinking = ->
	blinkerAnimation.stop()
	blinkerAnimationReversed.stop()
	blinker.visible = false

# Home states

openSearchHome = ->
	cards.draggable.enabled = false

	keyboard.states.switch "shown"
	cards.states.switch "pick", curve: SLOW_CURVE
	header.states.switch "shown", curve: SLOW_CURVE
	recentsIcon.states.switch "shown", curve: SLOW_CURVE
	settingsIcon.states.switch "hidden"
	logo.states.switch "hidden", curve: SLOW_CURVE
	statusBar.states.switch "hidden"
	srp.states.switch "hidden", curve: SLOW_CURVE

	cards.off "change:y", cardsHomeModulation
	srp.off Events.Click, openWebPane

closeSearchHome = ->
	cards.draggable.enabled = true
	logo.y = 100
	logo.scale = 0.6

	keyboard.states.switch "hidden"
	cards.states.switch "shown"
	header.states.switch "shown"
	logo.states.switch "shown"
	statusBar.states.switch "hidden"
	recentsIcon.states.switch "shown"
	settingsIcon.states.switch "shown"
	srp.states.switch "hidden"

	cards.on "change:y", cardsHomeModulation
	srp.off Events.Click, openWebPane

closeSearchSRP = ->
	keyboard.states.switch "hidden"
	cards.states.switch "hidden"
	header.states.switch "hidden"
	recentsIcon.states.switch "shownSRP"
	logo.states.switch "hidden"
	statusBar.states.switch "shown"
	srp.states.switch "shown"

	srp.on Events.Click, openWebPane

# SearchBox states

openSearchBoxHome = ->
	isKeyboardVisible = true
	
	searchBox.states.switch "opened"
	mic.states.switch "shownRight"
	corpus.states.switch "hidden"
	smallLogo.states.switch "hidden"
	blueBottle.states.switch "hidden"

	Utils.delay 0.15, ->
		blinker.visible = true
		blinkerAnimation.start()
		superG.states.switch "shown"
		suggestions.states.switch "shown"

	searchBox.off Events.Click, openSearchHome

closeSearchBoxHome = ->
	isKeyboardVisible = false
	
	searchBox.states.switch "closed"
	superG.states.switch "hidden"
	suggestions.states.switch "hidden"
	mic.states.switch "shownLeft"
	corpus.states.switch "hidden"
	blueBottle.states.switch "hidden"

	stopBlinking()

	searchBox.on Events.Click, ->
		openSearchHome()
		openSearchBoxHome()

searchBoxSRP = ->
	isKeyboardVisible = false
	
	searchBox.states.switch "closedSRP"
	superG.states.switch "shown"
	suggestions.states.switch "hidden"
	mic.states.switch "hidden"
	corpus.states.switch "shown"
	blueBottle.states.switch "shown"

	stopBlinking()

	searchBox.on Events.Click, ->
		openSearchHome()
		openSearchBoxHome()

superG.on Events.Click, (event) ->
	event.stopPropagation()
	closeSearchHome()
	closeSearchBoxHome()

# Now Stream

THRESHOLDS = [528, 60]

cardsHomeModulation = ->

	if keyboard.y >= Screen.height
		header.y = Utils.modulate(@y
			THRESHOLDS
			[32, -164]
			true
		)
		logo.y = Utils.modulate(@y
			THRESHOLDS
			[172, 0]
			true
		)
		logo.opacity = Utils.modulate(@y
			[528, 240]
			[1, 0]
			true
		)
		smallLogo.opacity = Utils.modulate(@y
			[428, 280]
			[0, 1]
			true
		)
		logo.scale = Utils.modulate(@y
			THRESHOLDS
			[1, 0.3]
			true
		)
		searchBox.y = Utils.modulate(@y
			THRESHOLDS
			[312, -164]
			true
		)

	if not @draggable.isDragging and @draggable.direction is "down" and 90 < @y < 528
		@animate
			properties: y: 528
			curve: "spring(100, 20, #{@draggable.velocity.y}, 0.2)"

# Webpane

openWebPane = (event) ->
	event.stopPropagation()
	webpane.states.switch "visible"
	home.states.switch "behind"

	if searchBox.states.state isnt "closedSRP"
		Utils.delay 1, ->
			closeSearchHome()
			closeSearchBoxHome()

closeWebPane = (event) ->
	event.stopPropagation()
	webpane.states.switch "default"
	home.states.switch "home", curve: SLOW_CURVE

nextWebpane = ->
	web.image = "images/theverge-b.png"
	webpaneForwardIcon.opacity = 0.5
	webpaneBackIcon.opacity = 1

prevWebpane = ->
	web.image = "images/theverge-a.png"
	webpaneForwardIcon.opacity = 1
	webpaneBackIcon.opacity = 0.5

webHitArea.on Events.Click, openWebPane
webpaneCloseIcon.on Events.Click, closeWebPane

web.on Events.Click, ->
	nextWebpane()	
	navigationBar.states.switch "visible"

webpaneBackIcon.on Events.Click, prevWebpane

# Search Results

srpHitarea.on Events.Click, (event) ->
	event.stopPropagation()
	closeSearchSRP()
	searchBoxSRP()
	
# Recents

recentsIcon.on Events.Click, ->
	home.states.switch "superBehind", curve: SLOW_CURVE
	recentsTitle.states.switch "shown", curve: SLOW_CURVE
	recentsC.states.switch "shown"
	recentsB.states.switch "shown", delay: 0.06
	recentsA.states.switch "shown", delay: 0.12
	
	keyboard.states.switch "hidden" if isKeyboardVisible

recentsCloseIcon.on Events.Click, ->
	home.states.switch "home", curve: SLOW_CURVE
	recentsTitle.states.switch "hidden"
	recentsC.states.switch "hidden", delay: 0.04
	recentsB.states.switch "hidden", delay: 0.02
	recentsA.states.switch "hidden"
	
	keyboard.states.switch "shown" if isKeyboardVisible