class Stage
	constructor: ->
		@pages = []
		@currentPage = 0
		@interval = null
		
		background = new BackgroundLayer backgroundColor: "#FFF"
	
		@pageComponent = new PageComponent
			width: Screen.width
			height: 808
			scrollHorizontal: false
		
		@pageComponent.animationOptions = curve: "spring(180, 30, 0)"
		@pageComponent.content.draggable.overdrag = false
		@pageComponent.content.index = 2
		 
		logo = new Layer
			y: 64
			width: 158, height: 52
			image:"images/logo.png"
			superLayer: @pageComponent
			index: 1
		
		logo.centerX()
		
		nextButton = new Layer
			maxY: Screen.height
			width: 750, height: 124
			image:"images/bottomBar.png"
		
		#Events
		
		nextButton.on Events.Click, =>
			@autoPlay false
			@_animateToNextPage()
			@autoPlay true
		
		@pageComponent.on "change:currentPage", =>
			@currentPage = @pageComponent.verticalPageIndex(@pageComponent.currentPage)

			for page in @pages
				page.indicator.animate
					properties: opacity: 0
					curve: "ease"
					time: 0.3
					
			@pages[@currentPage].indicator.animate
				properties: opacity: 1
				curve: "ease"
				time: 0.3
				
		@pageComponent.content.on Events.DragStart, => @autoPlay false
		@pageComponent.content.on Events.DragEnd, => @autoPlay true
			
		@pageComponent.on Events.Move, =>
			for page, index in @pages
				
				currentCardYPos = page.cardArea.screenFrame.y
				
				page.card.scale = Utils.modulate(currentCardYPos
					[stage.pageComponent.height, -stage.pageComponent.height]
					[1.25, 0.75]
					true
				)
			
				if page.cardArea.screenFrame.y < 0
					page.backgroundImage.opacity = Utils.modulate(currentCardYPos
						[0, stage.pageComponent.height]
						[1, 0]
						true
					)
					page.backgroundImage.y = Utils.modulate(currentCardYPos
						[0, -stage.pageComponent.height]
						[-20, -40]
						true
					)
					page.text.opacity = Utils.modulate(currentCardYPos
						[0, -stage.pageComponent.height]
						[1, 0]
						true
					)
				else if page.cardArea.screenFrame.y > 0
					page.backgroundImage.opacity = Utils.modulate(currentCardYPos
						[stage.pageComponent.height, 0]
						[0, 1]
						false
					)
					page.backgroundImage.y = Utils.modulate(currentCardYPos
						[stage.pageComponent.height, 0]
						[0, -20]
						true
					)
					page.text.opacity = Utils.modulate(currentCardYPos
						[stage.pageComponent.height, 0]
						[0, 1]
						true
					)
	
	createPage: (config, index) ->
		page = new Page @, config, index
	
	autoPlay: (flag) =>
		if flag then @interval = Utils.interval 4, @_animateToNextPage else clearInterval @interval
			
	_animateToNextPage: =>
		lastPage = @pages.length - 1
		nextPage = if @currentPage isnt lastPage then @pages[@currentPage + 1].cardArea else @pages[0].cardArea
		
		@pageComponent.snapToPage nextPage, true, animationOptions = curve: "spring(100, 30, 0)"


class Page
	constructor: (stage, name, index) ->
		
		initialPageVisibility = if index is 0 then 1 else 0
		
		@backgroundImage = new Layer
			y: -20
			width: stage.pageComponent.width, height: stage.pageComponent.height + 40
			image: "images/#{name}Background.png"
			superLayer: stage.pageComponent
			index: 0
			opacity: initialPageVisibility
		
		@cardArea = new Layer
			y: stage.pageComponent.height * index
			size: stage.pageComponent.size
			backgroundColor: null
			superLayer: stage.pageComponent.content
			index: 3

		@card = new Layer
			y: 208
			width: 648, height: 464
			image: "images/#{name}Card.png"
			superLayer: @cardArea
			
		@card.centerX()
		@card.pixelAlign()
		
		indicatorProps =
			x: 710, y: 388 + (index * 16)
			width: 8, height: 8
			borderRadius: "50%"
		
		indicatorBg = new Layer indicatorProps
		indicatorBg.backgroundColor = "black"
		indicatorBg.opacity = 0.3

		@indicator = new Layer indicatorProps
		@indicator.backgroundColor = "white"
		@indicator.opacity = initialPageVisibility
			
		@text = new Layer
			x: 64, y: 916
			width: 622, height: 190
			image: "images/#{name}Text.png"
			opacity: initialPageVisibility

		stage.pages.push @

# Layers
configs = ["weather", "sport", "time", "flight", "package"]

stage = new Stage
stage.createPage config, index for config, index in configs
stage.autoPlay(true)