Framer.Defaults.Animation.curve = "spring(260, 30, 0, 0.1)"

class tab extends Layer
	constructor: ->
		super
	
class Tabs extends Layer
	constructor: ->
		super
			size: Screen.size
			style: "background": "linear-gradient(0deg, #4A4A4A 0%, #383838 100%)"
		
		PAGE_SCALE_RATIO = 0.96
		
		tabsChrome = new Layer
			y: -100
			width: Screen.width, height: 112
			backgroundColor: null
			opacity: 0
			superLayer: @
			
		tabsChrome.states.add
			"shown": y: 0, opacity: 1
		
		tabsCloseIcon = new Layer
			x: 14, y: 34
			width: 68, height: 68
			image: "images/tabsCloseIcon.png"
			superLayer: tabsChrome
			
		searchBoxTabs = new Layer
			x: 96, y: 24
			width: 610, height: 88
			image: "images/searchBoxTabs.png"
			superLayer: tabsChrome
		
		carrousel = new PageComponent
			x: 72, y: 200
			width: 606, height: 1000
			superLayer: @
			scrollVertical: false
			clip: false
			velocityThreshold: 1

		pages = for i in [0..3]
			page = new Layer
				x: carrousel.width * i
				size: carrousel.size
				superLayer: carrousel.content
				clip: false
				backgroundColor: null
				scale: PAGE_SCALE_RATIO
				opacity: 0.6
				
		pages[0].scale = 1
		pages[0].opacity = 1
		
		pagesContent = for i in [1..3]	
			pageContent = new Layer
				x: 16, y: 34
				width: 574, height: 908
				superLayer: pages[i]
				image: "images/page#{i}.png"
		
		(new Image).src = "images/faviconGoogle.png"
		
		info = new Layer
			x: 154, y: 1310
			width: 440, height: 248
			image: "images/favicon.png"
			scale: 0.6

		info.originalProps = info.props
		
		info.states.add
			"shown": scale: 1, opacity: 1, y: 900
		
		addIcon = new Layer
			x: 606, y: 1294
			width: 112, height: 112
			image: "images/addIcon.png"
			opacity: 0
			superLayer: @
			
		addIcon.states.add
			"shown": y: 1194, opacity: 1
		
		@open = =>
			content.scaleDown()
			content.disable(true)
			chrome.hide()
			@showInfo()
			
			tabsChrome.states.switch "shown"
			addIcon.states.switch "shown"
			
		@close = =>
			content.scaleUp()
			content.disable(false)
			chrome.show()
			@hideInfo()
			
			tabsChrome.states.switch "default"
			addIcon.states.switch "default"
		
		repositionPageContent = (layer, operator) ->
			layer.y = if operator then layer.y - carrousel.y else layer.y + carrousel.y
			layer.x = if operator then layer.x - carrousel.x else layer.x + carrousel.x
			
		@addCurrentViewToCarrousel = ->
			content.superLayer = pages[0]
			repositionPageContent content, true
			
		@removeCurrentViewFromCarrousel = ->
			content.superLayer = null
			content.index = content.originalIndex
			repositionPageContent content
			
		@showInfo = ->
			info.placeBefore content
			info.states.switch "shown"
			info.image = if content.currentView is "srp" then "images/faviconGoogle.png" else "images/favicon.png"
			
			info.once Events.StateDidSwitch, -> 
				info.superLayer = pages[0]
				repositionPageContent info, true
				
		@hideInfo = ->
			info.superLayer = info.originalProps.superLayer
			info.index = 3
			repositionPageContent info
			
			info.states.switch "default"
			
		tabsCloseIcon.on Events.Click, =>
			current = carrousel.horizontalPageIndex carrousel.currentPage
			
			if current is 0
			 	@close()
			else
			 	carrousel.snapToPage pages[0]
			 	carrousel.content.once Events.AnimationEnd, @close

		pages[0].on Events.Click, => @close() if not carrousel.isDragging
		
		carrousel.on Events.Move, ->
			for page in pages
				page.scale = 
					if page.screenFrame.x > 72
						Utils.modulate(page.screenFrame.x, [678, 72], [PAGE_SCALE_RATIO, 1], true)
					else 
						Utils.modulate(page.screenFrame.x, [72, -534], [1, PAGE_SCALE_RATIO], true)
				
				page.opacity = 
					if page.screenFrame.x > 72
						Utils.modulate(page.screenFrame.x, [678, 72], [0.6, 1], true)
					else 
						Utils.modulate(page.screenFrame.x, [72, -534], [1, 0.6], true)

class Content extends Layer
	constructor: ->
		@currentView = "srp"
		
		super
			y: 136
			width: Screen.width, height: 1198
			backgroundColor: "#F2F2F2"
			originY: 0
			index: 3
		
		@states.add
			"tabs": height: 960, scale: 564 / Screen.width, y: 240
			
		@originalIndex = @index
		
		srp = new Layer
			size: @size
			superLayer: @
			backgroundColor: null
			
		srp.states.add
			"offscreen": x: -Screen.width
			
		corpus = new Layer
			x: 16, y: 12
			width: 664, height: 48
			image: "images/corpuses.png"
			superLayer: srp
			
		corpus.states.add 
			"tabs": y: 40
			
		scroll = new ScrollComponent
			y: 60
			width: Screen.width, height: 1138
			scrollHorizontal: false
			shadowY: 0
			shadowBlur: 0
			shadowColor: "rgba(0, 0, 0, 0.15)"
			superLayer: srp
		
		scroll.states.add 
			"tabs": y: 88
			
		scroll.on Events.Move, ->
			scroll.shadowBlur = Utils.modulate scroll.scrollY, [0, 18], [0, 4], true
				
		results = new Layer
			x: 15, y: 16
			width: 722, height: 3328
			image: "images/searchResults.png"
			superLayer: scroll.content
			
		pane = new Layer
			x: Screen.width
			width: 750, height: 1200
			image: "images/webpane.png"
			superLayer: @
			
		pane.states.add
			"shown": x: 0
		
		@scaleDown = ->
			@states.switch "tabs"
			
			@once Events.StateDidSwitch, -> 
				tabs.addCurrentViewToCarrousel()
			
			if @currentView is "srp"
				corpus.states.switch "tabs"
				scroll.states.switch "tabs"
		
		@scaleUp = ->
			tabs.removeCurrentViewFromCarrousel()
			
			@states.switch "default"
			corpus.states.switch "default"
			scroll.states.switch "default"

		@disable = (value) ->
			results.ignoreEvents = value
			scroll.content.ignoreEvents = value
		
		@switchPanes = ->
			if @currentView is "srp"
				@currentView = "pane"
				chrome.searchBox.setValue "http://www.bluebottle.com"
			else
				 @currentView = "srp"
				 chrome.searchBox.setValue "blue bottle"
			
			srp.states.next()
			pane.states.next()
			chrome.switchMode()
		
		results.on Events.Click, => @switchPanes() if not scroll.isDragging


class Chrome extends Layer
	constructor: ->
		super
			width: Screen.width, height: 136
			backgroundColor: null
			clip: false
			backgroundColor: "#F2F2F2"
			
		@states.add
			"hidden": y: -136

		homeIcon = new Layer
			x: 32, y: 44
			width: 48, height: 48
			image: "images/homeIcon.png"
			superLayer: @
			
		homeIcon.states.add
			"shifted": x: 88
		
		tabsIcon = new Layer
			x: 614, y: 44
			width: 48, height: 48
			image: "images/tabsIcon.png"
			superLayer: @

		moreIcon = new Layer
			x: 678, y: 44
			width: 48, height: 48
			image: "images/moreIcon.png"
			superLayer: @
			
		backIconBrowser = new Layer
			x: 24, y: 44
			width: 48, height: 50
			image: "images/backIconBrowser.png"
			opacity: 0
			superLayer: @
			
		backIconBrowser.states.add
			"shown": x: 24, opacity: 1
			
		dropdown = new Layer
			x: 274, y: 4
			width: 476, height: 672
			image: "images/dropdown.png"
			scale: 0
			originX: 0.9
			originY: 0.07
			opacity: 0
		
		dropdown.states.add
			"shown": scale: 1, opacity: 1
		
		@scrim = new Layer
			size: Screen.size
			backgroundColor: "#F2F2F2"
			opacity: 0
			superLayer: @
		
		@scrim.states.add
			"shown": opacity: 0.8
		
		@hide = =>
			@states.switch "hidden"
			
		@show = =>
			@states.switch "default"
		
		@showScrim = =>
			@scrim.states.switch "shown"
			@scrim.once Events.Click, @searchBox.close 
		
		@hideScrim = =>
			@scrim.states.switch "default"
			@scrim.ignoreEvents = true		
			
		@switchMode = ->
			backIconBrowser.states.next()
			homeIcon.states.next()
			@searchBox.switchMode()
		
		backIconBrowser.on Events.Click, -> content.switchPanes() if content.currentView is "pane"
		tabsIcon.on Events.Click, tabs.open
		
		moreIcon.on Events.Click, =>
			dropdown.states.next()
			
			protection = new Layer
				size: Screen.size
				opacity: 0
				
			protection.once Events.Click, -> 
				dropdown.states.next()
				@destroy()
		
		@searchBox = new SearchBox(@)

class SearchBox extends Layer
	constructor: (superlayer) ->
		super
			x: 112, y: 24
			width: 470, height: 88
			backgroundColor: "white"
			borderRadius: 4
			shadowY: 2
			shadowBlur: 4
			shadowColor: "rgba(0, 0, 0, 0.20)"
			superLayer: superlayer
			
		@states.add
			"srp": x: 16, y: 16, width: Screen.width - 32, height: 568
			"noQuery": x: 16, y: 16, width: Screen.width - 32, height: 376
			"url": x: 16, y: 16, width: Screen.width - 32, height: 104
			"pane": x: 168, y: 24, width: 414, height: 88
			
		INPUT_CSS = "font: 28px Roboto; color: rgba(0, 0, 0, 0.54); cursor: inherit; outline: none; width: #{@width}px;"
		INPUT_CSS_ACTIVE = "font: 32px Roboto; color: rgba(0, 0, 0, 0.87); cursor: inherit; outline: none; width: #{@width}px;"
		
		inputText = new Layer
			x: 28, y: 28
			width: @width, height: @height - 32
			backgroundColor: null
			superLayer: @
			html: "<input id='box' type='text' value='blue bottle' placeholder='Search or type URL' autocapitalize='off' autocomplete='off' autocorrect='off'/>"
			
		inputHTML = document.getElementById('box')
		inputHTML.style.cssText = INPUT_CSS
		
		backIcon = new Layer
			x: -48, y: 28
			width: 48, height: 48
			image: "images/backIcon.png"
			superLayer: @
		
		backIcon.states.add
			"shown": x: 30
			
		cleanIcon = new Layer
			x: @width, y: 28
			width: 48, height: 48
			image: "images/cleanIcon.png"
			superLayer: @
		
		cleanIcon.states.add
			"shown": x: 638, scale: 1, opacity: 1
			"removed": scale: 0, opacity: 0
			
		querySuggestions = new Layer
			x: 36, y: 144
			width: 448, height: 390
			image: "images/querySuggestions.png"
			superLayer: @
			opacity: 0
		
		querySuggestions.states.add
			"shown": opacity: 1
			
		emptySuggestions = new Layer
			x: 36, y: 144
			width: 250, height: 192
			image: "images/emptySuggestions.png"
			superLayer: @
			opacity: 0
		
		emptySuggestions.states.add
			"shown": opacity: 1
	
		divider = new Layer
			y: @height + 14
			width: @states._states["srp"].width, height: 2
			backgroundColor: "rgba(0, 0, 0, 0.12)"
			superLayer: @
		
		@switchMode = ->
			@states.next "pane","default"
		
		@setValue = (newValue) ->
			inputHTML.value = newValue
		
		@clean = =>
			@setValue ""
			
			divider.visible = true
			
			@states.switch "noQuery"
			querySuggestions.states.switch "default"
			emptySuggestions.states.switch "shown"
			cleanIcon.states.switch "removed"
			
			inputHTML.focus()
			
		@expandSearchBox = ->
			backIcon.states.switch "shown"
			cleanIcon.states.switch "shown"
			
			if content.currentView is "srp" or inputHTML.value isnt "http://www.bluebottle.com"
				divider.visible = true
				@states.switch "srp"
				querySuggestions.states.switch "shown"
				emptySuggestions.states.switch "default"
			else
				divider.visible = false
				@states.switch "url"
		
		@open = (event) =>
			@initialValue = inputHTML.value
			
			@expandSearchBox()
			
			superlayer.showScrim()
			
			inputText.animate properties: x: 112, y: 34
			inputHTML.style.cssText = INPUT_CSS_ACTIVE
			inputHTML.setSelectionRange 0,9999
			
		@close = (event) =>
			@setValue @initialValue if inputHTML.value.length is 0	
			@states.switch if content.currentView is "srp" then "default" else "pane"
			
			superlayer.hideScrim()
			
			backIcon.states.switch "default"
			cleanIcon.states.switch "default"
			
			inputText.animate properties: x: 28, y: 28
			inputHTML.style.cssText = INPUT_CSS
			inputHTML.blur()
			
			@once Events.Click, @open
		
		#Events
		
		@once Events.Click, @open
		
		backIcon.on Events.Click, =>
			@close()
			event.stopPropagation()
			
		cleanIcon.on Events.Click, @clean
		
		inputHTML.addEventListener "input", =>
			@clean() if inputHTML.value.length is 0
			@expandSearchBox() if inputHTML.value.length is 1
			
		inputHTML.addEventListener "keypress", (event) =>
			@close() if event.keyCode is 13 or event.keyCode is 27
		

tabs = new Tabs
content = new Content
chrome = new Chrome