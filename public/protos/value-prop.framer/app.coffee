# Framer.Device.background.style.background = 
# 	"linear-gradient(45deg, #fff 50%, #E5EFFC 100%)"

class Stage
	constructor: ->
		THE_CURVE = "spring(180, 30, 0)"
		
		@spaces = []
		@currentScene = 0
		textOffset = 24
		
		background = new BackgroundLayer backgroundColor: "#FFF"
	
		@spaceView = new PageComponent
			width: Screen.width
			height: 808
			scrollHorizontal: false
		
		@spaceView.animationOptions = curve: THE_CURVE
		@spaceView.content.draggable.overdrag = false
		@spaceView.content.index = 3
		 
		logo = new Layer
			y: 64
			width: 150, height: 52
			image:"images/logo.png"
			superLayer: @spaceView
			index: 1
		
		logo.centerX()
		
		nextButton = new Layer
			maxY: Screen.height
			width: 750, height: 124
			image:"images/bottomBar.png"
		
		#Events
		
		nextButton.on Events.Click, =>
			@spaceView.snapToNextPage("bottom", true)
		
		@spaceView.on "change:currentPage", =>
			@currentScene = @spaceView.horizontalPageIndex(@spaceView.currentPage)
			
			for space in @spaces
				space.indicator.animate
					properties: opacity: 0
					curve: "ease"
					time: 0.3
					
			@spaces[@currentScene].indicator.animate
				properties: opacity: 1
				curve: "ease"
				time: 0.3
			
		@spaceView.on Events.Move, =>
			for space in @spaces
				
				currentCardYPos = space.cardArea.screenFrame.y
				
				space.card.scale = Utils.modulate(currentCardYPos
					[stage.spaceView.height, -stage.spaceView.height]
					[1.25, 0.75]
					true
				)
			
				if space.cardArea.screenFrame.y < 0
					space.backgroundImage.opacity = Utils.modulate(currentCardYPos
						[0, stage.spaceView.height]
						[1, 0]
						true
					)
					space.backgroundImage.y = Utils.modulate(currentCardYPos
						[0, -stage.spaceView.height]
						[-20, -40]
						true
					)
					space.text.opacity = Utils.modulate(currentCardYPos
						[0, -stage.spaceView.height]
						[1, 0]
						true
					)
				else if space.cardArea.screenFrame.y > 0
					space.backgroundImage.opacity = Utils.modulate(currentCardYPos
						[stage.spaceView.height, 0]
						[0, 1]
						true
					)
					space.backgroundImage.y = Utils.modulate(currentCardYPos
						[stage.spaceView.height, 0]
						[0, -20]
						true
					)
					space.text.opacity = Utils.modulate(currentCardYPos
						[stage.spaceView.height, 0]
						[0, 1]
						true
					)

	createSpace: (config, index) ->
		space = new Space @, config, index

class Space
	constructor: (stage, name, index) ->
		
		initialSpaceVisibility = if index is 0 then 1 else 0
		
		@backgroundImage = new Layer
			y: -20
			width: stage.spaceView.width, height: 888
			image: "images/#{name}Background.png"
			superLayer: stage.spaceView
			index: 0
			opacity: initialSpaceVisibility
		
		@cardArea = new Layer
			y: stage.spaceView.height * index
			size: stage.spaceView.size
			backgroundColor: null
			superLayer: stage.spaceView.content
			index: 3

		@card = new Layer
			y: 208
			width: 648, height: 464
			image: "images/#{name}Card.png"
			superLayer: @cardArea
			
		@card.centerX()
		@card.pixelAlign()
		
		indicatorConfig =
			x: 710, y: 388 + (index * 16)
			width: 8, height: 8
			borderRadius: "50%"
		
		indicatorBg = new Layer indicatorConfig
		indicatorBg.backgroundColor = "black"
		indicatorBg.opacity = 0.3

		@indicator = new Layer indicatorConfig
		@indicator.backgroundColor = "white"
		@indicator.opacity = initialSpaceVisibility
			
		@text = new Layer
			x: 64, y: 916
			width: 622, height: 190
			image: "images/#{name}Text.png"
			opacity: initialSpaceVisibility

		stage.spaces.push @

# Layers
configs = ["weather", "sport", "time", "flight", "package"]

stage = new Stage
stage.createSpace config, index for config, index in configs