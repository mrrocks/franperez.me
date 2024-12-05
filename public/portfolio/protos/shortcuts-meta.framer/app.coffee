Framer.Defaults.Animation = curve: "spring(200, 30, 0, 0.01)"
Screen.backgroundColor = "F2F2F2"

# Utils

pt = (px) -> Math.round(px * 2)

# Constants

PADDING = pt(8)
WIDTH = Screen.width - PADDING * 2
CARD =
	width: WIDTH
	borderRadius: pt(1)
	backgroundColor: "white"
	shadowY: pt(1)
	shadowBlur: pt(3)
	shadowColor: "rgba(0, 0, 0, 0.24)"

# App

header = new Layer
	x: Align.center, y: pt(5)
	width: 728
	height: 110
	image: "images/header.png"

# Ripple

Layer::rippleStart = (event, layer) ->
	currentLayer.destroy() if currentLayer
	
	layer.click = new Layer
		midX: event.offsetX, midY: event.offsetY
		width: layer.width, height: layer.width
		backgroundColor: "black"
		borderRadius: "50%"
		opacity: 0.05
		parent: layer
		scale: 0

	layer.clip = true
	
	layer.click.animate
		properties: scale: 3
		time: 0.3, curve: "linear"
		
	currentLayer = layer.click
		
Layer::rippleEnd = (event, layer) ->
	layer.click.animate
		properties: opacity: 0
		time: 0.3, curve: "linear"
	
	layer.click.once Events.AnimationEnd, -> this.destroy()

# Component

class ShortcutsComponent	
	constructor: ->
		this.isOpen = true
		this.isSearchOpen = false
		
		this.searchIcon = new Layer
			x: pt(12)
			y: pt(26)
			width: 686
			height: 80
			opacity: 0
			image: "images/searchIcon.png"
				
		this.component = new Layer
			x: Align.center, y: header.height + pt(16)
			width: WIDTH + pt(6), height: Screen.height - pt(88)
			backgroundColor: "transparent"
		
		this.mask = new Layer
			x: Align.center, y: pt(44)
			width: WIDTH + pt(6), height: Screen.height - this.component.y - pt(44)
			backgroundColor: "transparent"
			clip: true
			parent: this.component
		
		this.bg = new Layer
			x: Align.center, maxY: pt(92)
			width: WIDTH, height: Screen.height - pt(88)
			backgroundColor: "white"
			borderRadius: pt(1)
			shadowY: pt(1)
			shadowBlur: pt(3)
			shadowColor: "rgba(0, 0, 0, 0.24)"
			parent: this.mask
		
		cellStyle = (cell) -> _.assign cell, CARD
			
		this.cards = new GridComponent
			y: this.bg.height + PADDING
			height: pt(600) 
			rows: 3
			columns: 1
			spacing: PADDING
			renderCell: cellStyle
			parent: this.bg

		this.bg.draggable.enabled = true
		this.bg.draggable.horizontal = false
		this.bg.draggable.directionLock = true

		this.favorites = new Favorites(this)
		this.categories = new Categories(this)
			
		this.searchBox = new Layer
			x: pt(3)
			height: pt(44)
			parent: this.component
			image: "images/mic.png"
			style:
				"background-size": "auto"
				"background-position": "96%"
			
		_.assign this.searchBox, CARD
		
		this.searchBox.shadowColor = "rgba(0, 0, 0, 0.14)"
		
		this.label = new Layer
			x: pt(60), y: pt(16)
			width: 404
			height: 28
			opacity: 0
			image: "images/label.png"
			parent: this.searchBox

			
		this.all = new Layer
			x: pt(3)
			width: 88
			height: 88
			backgroundColor: null
			style: "border-right": "2px solid #EBEBEB"
			parent: this.component
		
		this.allExpanded = new Layer
			width: 86
			height: 32
			y: 29
			image: "images/all.png"
			style:
				"background-size": "auto"
			parent: this.all
			
		this.allCollapsed = new Layer
			width: 86
			height: 32
			y: 29
			opacity: 0
			image: "images/allCollapsed.png"
			style:
				"background-size": "auto"
			parent: this.all
		
		layer.orgProps = layer.props for layer in Framer.CurrentContext.getLayers()
		
		# Events
			
		this.all.on Events.TouchStart, this.all.rippleStart
		this.all.on Events.TouchEnd, this.openClose
	
		this.bg.on Events.DragEnd, this._showCategories
				
		this.searchBox.on Events.Tap, this.search
		
		this.searchIcon.on Events.Tap, this.closeSearch
	
	
	_showCollapsedIcon: =>
		this.allCollapsed.animate
			properties: opacity: 1, rotationZ: 180, scale: 1
			
		this.allExpanded.animate
			properties: rotationZ: 180, scale: 1.2
			
		this.allExpanded.animate
			properties: opacity: 0
			time: 0.2, curve: "ease"
	
	_showExpandedIcon: =>
		this.allCollapsed.animate
			properties: this.allCollapsed.orgProps
			
		this.allExpanded.animate
			properties: this.allExpanded.orgProps
	
	_showCategories: =>
	
		movUp = this.bg.draggable.direction is "up"
		movDown = this.bg.draggable.direction is "down"
		
		switch
			when this.bg.y < this.bg.orgProps.y
				this.close()
			when movDown or this.isOpen
				this.expand()
			when movUp and this.bg.y > this.bg.orgProps.y or not this.isOpen
				this.open()
	
	openClose: (event, layer) =>

		this.all.rippleEnd(event, layer)
		
		if this.isOpen
			this.expand()
		else
			this.open()
	
	open: =>
		this.isOpen = true
		
		this.bg.animate
			properties: y: this.bg.orgProps.y
		
		this.searchBox.animate
			properties: this.searchBox.orgProps
			
		this.all.animate
			properties: this.all.orgProps
			
		this._showExpandedIcon()
		this.categories.closeCategory()
	
	expand: =>
		this.isExpanded = true
		this.isOpen = false
		
		this.bg.animate
			properties: maxY: this.searchBox.y + pt(438)
			
		this._showCollapsedIcon()
		this.categories.closeCategory()
		
	close: =>
		this.isOpen = false
		this.isExpanded = false
		
		this.search() if this.isSearchOpen
		
		this.bg.animate
			properties: maxY: this.searchBox.y - pt(6)
			
		this._showCollapsedIcon()
		this.bg.once Events.AnimationEnd, => this.categories.closeCategory()

	search: =>
		this.close() if this.isExpanded or this.isOpen

		this.component.animate
			properties: y: pt(24)
			
		this.searchBox.animate
			properties: width: pt(279), x: pt(46)
		
		this.all.animate
			properties: x: pt(46)
			
		this.searchIcon.animate
			properties: opacity: 1
			
		this.isSearchOpen = true
			
	closeSearch: =>
		this.isSearchOpen = false
		
		this.component.animate
			properties: this.component.orgProps
			
		this.searchBox.animate
			properties: this.searchBox.orgProps
		
		this.all.animate
			properties: this.all.orgProps
			
		this.searchIcon.animate
			properties: this.searchIcon.orgProps
			
	categorie: =>
		this.bg.animate
			properties: maxY: this.searchBox.y + pt(284)

class Favorites
	constructor: (parent) ->
		this.allFavorites = []
		
		this.favorites = new Layer
			y: Align.bottom()
			width: WIDTH, height: pt(113)
			backgroundColor: "F2F2F2"
			style: "border-top": "2px solid rgba(0, 0, 0, 0.08)"
			parent: parent.bg
		
		this.drag = new Layer
			x: Align.center, y: Align.bottom(pt(-9))
			width: 32
			height: 12
			image: "images/drag.png"
			parent: this.favorites
			
		this.title = new Layer
			x: pt(16), y: Align.bottom(pt(-89))
			width: 98
			height: 22
			opacity: 0
			image: "images/title.png"
			parent: this.favorites
			
		this.scroll = new ScrollComponent
			height: 96, width: this.favorites.width
			y: Align.bottom(pt(-28))
			parent: this.favorites
			scrollVertical: false
			directionLock: true
					
		this.favoritesNew = new Layer
			width: 718 + pt(24)
			height: 96
			image: "images/favorites.png"
			style:
				"background-size": "auto"
				"background-position": "24px 0"
			parent: this.scroll.content

# 		this.createFavorites(5)
		
		this.parent = parent 
		
		# Events
		
		this.drag.on Events.Tap, parent.expand
		
		this.parent.bg.onChange "y", this._favoritesScaleDown
	
	createFavorites: (number) ->
		for i in [0...number]
			currentScale = 1
			
			favorite = new Layer
				x: pt(16) + i * (pt(48) + pt(22)), y: Align.bottom(pt(23))
				size: pt(48)
				image: "images/favorite#{i}.png"
				parent: this.favorites
			
			this.allFavorites.push(favorite)

			
	_favoritesScaleDown: =>
		parent = this.parent
		bgRange = [parent.bg.orgProps.y, -574]
# 		print parent.bg.y
		for favorite in this.allFavorites
			favorite.scale = Utils.modulate(parent.bg.y,
				bgRange
				[1, 0.78]
				true
			)
		
			favorite.y = Utils.modulate(parent.bg.y,
				bgRange
				[favorite.orgProps.y, favorite.orgProps.y + pt(5)]
				true
			)
		
		this.title.opacity = Utils.modulate(parent.bg.y,
			bgRange
			[0, 1]
			true
		)

		parent.cards.y = Utils.modulate(parent.bg.y,
			[parent.bg.orgProps.y, -1170]
			[parent.cards.orgProps.y, parent.cards.orgProps.y + pt(6)]
			true
		)
		
		parent.label.opacity = Utils.modulate(parent.bg.y,
			bgRange
			[0, 1]
			true
		)

class Categories
	CATEGORY_NAMES = ["news", "places", "travel", "enterntainment", "tools", "others"]
	
	constructor: (parent) ->
		this.allCategories = []
		this.parent = parent
		
		this.categoriesView = new Layer
			y: Align.bottom(pt(-113))
			width: 718
			height: 650
			parent: parent.bg
			backgroundColor: "white"
			clip: true
		
		cellStyle = (cell, row, column) => 
			cell.backgroundColor = "white"
			cell.style = 
				"background-size": "auto"
				
			cell.on Events.TouchStart, cell.rippleStart
			
			cell.on Events.TouchEnd, (event, layer) =>
				parent.categorie()
				this.openCategory()
				cell.rippleEnd(event, layer)
			
			this.allCategories.push cell
		
		this.categoriesList = new GridComponent
			size: this.categoriesView.size
			rows: 3
			columns: 2
			spacing: pt(1)
			parent: this.categoriesView
			backgroundColor: "EBEBEB"
			renderCell: cellStyle
		
		for cell, i in this.allCategories.reverse()
			cell.image = "images/#{CATEGORY_NAMES[i]}.png"
				
		this.categorie = new Layer
			x: this.categoriesView.width, y: pt(16)
			size: this.categoriesView.size
			parent: this.categoriesView
			backgroundColor: null
			
		this.back = new Layer
			x: pt(20), y: pt(20)
			width: 264
			height: 32
			image: "images/back.png"
			parent: this.categorie
			
		this.music = new Layer
			x: pt(269), y: pt(64)
			width: 96
			height: 146
			image: "images/music.png"
			parent: this.categorie
		
		this.tv = new Layer
			x: pt(157), y: pt(64)
			width: 112
			height: 146
			image: "images/tv.png"
			parent: this.categorie
		
		this.movies = new Layer
			x: pt(56), y: pt(64)
			width: 96
			height: 146
			image: "images/movies.png"
			parent: this.categorie
					
		this.back.on Events.TouchEnd, =>
			this.closeCategory()
			parent.expand()
			
	openCategory: (event) ->
		this.categoriesList.animate
			properties: x: -this.categoriesList.width, y: pt(149)
			
		this.categorie.animate
			properties: x: 0, y: pt(149)
			
	closeCategory: =>
		this.categoriesList.animate
			properties: x: 0, y: this.categoriesList.orgProps.y
			
		this.categorie.animate
			properties: x: this.categoriesList.width, y: this.categorie.orgProps.y
			
shortcutsComponent = new ShortcutsComponent

menu = new Layer
	y: Align.bottom
	width: 750
	height: 122
	image: "images/menu.png"
