Framer.Defaults.Animation.curve = "spring(260, 30, 0, 0.015)"

nowCards = []

cardProperties = {
	backgroundColor: "white"
	shadowBlur: 5
	shadowY: 2.5
	shadowColor: "rgba(0, 0, 0, 0.20)"
}

scaleToSize = (from, to) -> to / from

new BackgroundLayer backgroundColor: "#F2F2F2"

header = new Layer
	x: 32, y: 32
	width: 676, height: 56
	image: "images/header.png"

searchBox = new Layer
	x: 64, y: 464
	width: 622, height: 96
	borderRadius: 4

searchBox.props = _.extend(searchBox.props, cardProperties)

searchBox.states.add
	"collapsed": y: 280 + 50

googleLogo = new Layer
	x: 218, y: 272
	width: 316, height: 104
	image: "images/googlelogo.png"
	
googleLogo.states.add
	"collapsed": y: 136 + 50, scale: scaleToSize 316, 236

illus = new Layer
	x: 52, y: 982
	width: 654, height: 160
	image: "images/illus.png"
	
aroundYouText = new Layer
	x: 288, y: 962
	width: 142, height: 28
	image: "images/aroundyou.png"
	
aroundYouText.states.add
	"collapsed": y: 574

nowComponent = new PageComponent
	y: 1120
	width: Screen.width, height: 216
	scrollVertical: false
	contentInset: right: 48
	clip: false

for i in [0..4]
	card = new Layer
		x: (i * (654 + 16)) + 48
		width: 654, height: 192
		borderRadius: 4
		superLayer: nowComponent.content
			
	card.props = _.extend(card.props, cardProperties)
	
	card.on Events.Click, ->
		if not expanded and not nowComponent.isDragging
			expandCard(@)
			searchUp()
		else if expanded and not nowComponent.isDragging 
			collapseCard()
			searchDown()
			
	
	nowCards.push card

nowComponent.snapToPage(nowCards[1], false)
	
micIcon = new Layer
	x: 560, y: 28
	width: 28, height: 40
	image: "images/branded-mic-iphone.png"
	superLayer: searchBox

cardContent = new Layer
	y: 40
	width: 654, height: 586
	image: "images/card-content.png"
	superLayer: nowCards[1]

layer.originalProps = layer.props for layer in Framer.CurrentContext.getLayers()

#Logic

newHeight = 656
expanded = null
selectedCard = null

expandCard = (clickedCard) ->
	expanded = true
	
	selectedCard = clickedCard
	
	nowComponent.y = newHeight
	nowComponent.height = newHeight
	
	if nowComponent.currentPage is selectedCard
		nowComponent.snapToPage(selectedCard, false) 
	else
		nowComponent.snapToPage(selectedCard, true) 
	
	card.y = newHeight - card.height for card in nowCards
	
	selectedCard.animate
		properties: height: newHeight, y: 0
	
collapseCard = ->
	closeAnimation = selectedCard.animate
		properties: height: selectedCard.originalProps.height, y: 464
		
	closeAnimation.on Events.AnimationEnd, ->
		card.y = card.originalProps.y for card in nowCards
	
		nowComponent.y = nowComponent.originalProps.y
		nowComponent.height = nowComponent.originalProps.height
		
		nowComponent.snapToPage(nowComponent.currentPage, false)
		
		expanded = false

searchUp = ->
	googleLogo.states.switch "collapsed"
	searchBox.states.switch "collapsed"
	aroundYouText.states.switch "collapsed"
	
searchDown = ->
	googleLogo.states.switch "default"
	searchBox.states.switch "default"
	aroundYouText.states.switch "default"	
	
#Events

nowComponent.on Events.ScrollEnd, ->
	if selectedCard and nowComponent.currentPage isnt selectedCard and selectedCard.height isnt selectedCard.originalProps.height
		searchDown()
		Utils.delay 0.15, collapseCard
			