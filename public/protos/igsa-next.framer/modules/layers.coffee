helpers = require "helpers"

exports.bg = new BackgroundLayer backgroundColor: "#22262B"

#Home Screen

exports.iosHomeBackground = new Layer
	width: 752
	height: 1334
	image: "images/homescreenBackground.png"

exports.iosHomeContent = new Layer
	width: 752
	height: 1334
	image: "images/homescreenContent.png"
	originX: 0.09
	originY: 0.47

exports.googleAppIcon = new Layer
	x: 57
	y: 588
	width: 120
	height: 120
	image: "images/googleAppIcon.png"
	originX: 0.1
	originY: 0.48

#Splash Screen

exports.grayBackground = new Layer
	width: 752
	height: 1334
	backgroundColor: "#F5F5F5"
	scaleX: helpers.scaleToSize 752, 120
	scaleY: helpers.scaleToSize 1334, 120
	originX: 0.092
	originY: 0.484
	borderRadius: 240
	opacity: 0

exports.home = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: null
	originY: 1
	originX: 0.5

exports.home.states.add
	"behind": scale: 0.95, opacity: 0.4
	"superBehind": scale: 0.95, opacity: 0
	"home": opacity: 1, scale: 1

exports.logo = new Layer
	x: 236
	y: 620
	width: 278
	height: 90
	image: "images/logo.png"
	superLayer: exports.grayBackground

exports.logo.states.add
	"hidden": y: 500, opacity: 0, scale: 0.4
	"shown": y: 172, scale: 1, opacity: 1

#Home Screen

exports.statusBar = new Layer
	y: -40
	width: 750
	height: 40
	image: "images/statusBar.png"
	superLayer: exports.home

exports.statusBar.states.add
	"hidden": exports.statusBar._properties
	"shown": y: 0

exports.srp = new Layer
	x: 10
	y: 252
	width: 730
	height: 1082
	scale: 0.8
	opacity: 0
	originY: 1
	image: "images/srp.png"
	superLayer: exports.home

exports.srp.states.add
	"hidden": exports.srp._properties
	"shown": opacity: 1, scale: 1

exports.cards = new Layer
	x: 10
	y: Screen.height
	width: 730
	height: 4654
	image: "images/cards.png"
	superLayer: exports.home


exports.cards.states.add
	"hidden": exports.cards._properties
	"shown": y: 528
	"pick": y: 810

exports.cards.draggable.enabled = false
exports.cards.draggable.horizontal = false
exports.cards.draggable.constraints =
	x: 0
	y: -(exports.cards.height - Screen.height)
	width: 0
	height: 8502

# Recents

exports.recentsTitle = new Layer
	x: 32
	y: -64
	width: 396
	height: 48
	image: "images/recentsTitle.png"

exports.recentsTitle.states.add
	"hidden": exports.recentsTitle._properties
	"shown": y: 32

exports.recentsCloseIcon = new Layer
	width: 48
	height: 48
	image: "images/recentsCloseIcon.png"
	superLayer: exports.recentsTitle

exports.recentsC = new Layer
	x: 74
	y: Screen.height
	width: 602
	height: 834
	image: "images/recentsC.png"

exports.recentsC.states.add
	"hidden": exports.recentsC._properties
	"shown": y: 122

exports.recentsB = new Layer
	x: 52
	y: Screen.height
	width: 646
	height: 894
	image: "images/recentsB.png"

exports.recentsB.states.add
	"hidden": exports.recentsB._properties
	"shown": y: 152

exports.recentsA = new Layer
	y: Screen.height
	width: 750
	height: 1054
	image: "images/recentsA.png"

exports.recentsA.states.add
	"hidden": exports.recentsA._properties
	"shown": y: 280

# Keyboard

exports.keyboard = new Layer
	y: Screen.height
	width: 750
	height: 432
	image: "images/keyboard.png"

exports.keyboard.states.add
	"hidden": exports.keyboard._properties
	"shown": y: Screen.height - exports.keyboard.height

# Search Box

exports.searchBox = new Layer
	x: 48
	y: 160
	width: 654
	height: 488
	originY: 0
	backgroundColor: "white"
	borderRadius: 4
	visible: false
	shadowBlur: 5
	shadowY: 2
	shadowColor: "rgba(0, 0, 0, 0.20)"
	superLayer: exports.home

exports.searchBox.states.add
	"opened": scaleY: 1,x: 48, y: 160, height: 488, width: 654
	"closed": height: 104, y: 312, width: 622, x: 64
	"closedSRP": x: 16, y: 56, width: 718, height: 184

exports.smallLogo = new Layer
	x: 32
	y: 34
	width: 134
	height: 44
	image: "images/smallLogo.png"
	superLayer: exports.searchBox
	opacity: 0

exports.smallLogo.states.add
	"hidden": exports.smallLogo._properties

exports.mic = new Layer
	x: 588
	y: 32
	width: 28
	height: 38
	image: "images/mic.png"
	superLayer: exports.searchBox

exports.mic.states.add
	"hidden": opacity: 0
	"shownRight": exports.mic._properties
	"shownLeft": x: 556, opacity: 1

exports.superG = new Layer
	x: 30
	y: 30
	width: 42
	height: 44
	image: "images/superG.png"
	superLayer: exports.searchBox
	scale: 0
	rotationZ: 180
	opacity: 0

exports.superG.states.add
	"hidden": exports.superG._properties
	"shown": rotationZ: 0, scale: 1, opacity: 1

exports.superG.states.animationOptions = curve: "spring(240, 20, 0, 0)"

exports.blueBottle = new Layer
	x: 100
	y: 38
	width: 148
	height: 28
	image: "images/blueBottle.png"
	superLayer: exports.searchBox
	opacity: 0

exports.blueBottle.states.add
	"hidden": exports.blueBottle._properties
	"shown": opacity: 1

exports.blinker = new Layer
	x: 98
	y: 32
	width: 4
	height: 40
	backgroundColor: "#718BEC"
	superLayer: exports.searchBox
	opacity: 0

exports.suggestions = new Layer
	x: 0
	y: 38
	width: 654
	height: 412
	image: "images/suggestions.png"
	superLayer: exports.searchBox
	opacity: 0

exports.suggestions.states.add
	"hidden": exports.suggestions._properties
	"shown": opacity: 1

exports.corpus = new Layer
	y: 408 + 80
	width: 718
	height: 80
	image: "images/corpus.png"
	superLayer: exports.searchBox

exports.corpus.states.add
	"hidden": exports.corpus._properties
	"shown": y: 104

exports.corpus.on Events.Click, ->

exports.header = new Layer
	x: 32
	y: -64
	width: 232
	height: 64
	image: "images/header.png"
	clip: false
	superLayer: exports.home

exports.header.states.add
	"hidden": exports.header._properties
	"shown": y: 32

exports.settingsIcon = new Layer
	x: 590
	y: 16
	width: 8
	height: 32
	image: "images/settingsIcon.png"
	superLayer: exports.header
	opacity: 0

exports.settingsIcon.states.add
	"hidden": exports.settingsIcon._properties
	"shown": opacity: 1

exports.recentsIcon = new Layer
	x: 638
	y: 8
	width: 48
	height: 48
	image: "images/recentsIcon.png"
	superLayer: exports.header

exports.recentsIcon.states.add
	"shown": exports.recentsIcon._properties
	"shownSRP": y: 148, x: 626

# Web

exports.webHitArea = new Layer
	x: 32
	y: 200
	width: 590
	height: 94
	backgroundColor: null
	superLayer: exports.searchBox

exports.srpHitarea = new Layer
	x: 32
	y: 104
	width: 590
	height: 94
	backgroundColor: null
	superLayer: exports.searchBox



# Webpane

exports.webpane = new Layer
	x: 0
	y: Screen.height
	width: Screen.width
	height: Screen.height + 32
	backgroundColor: null

exports.webpane.states.add
	"visible": y: -32

exports.web = new Layer
	y: 168
	width: 750
	height: 1198
	backgroundColor: "white"
	image: "images/theverge-a.png"
	superLayer: exports.webpane

thevergeB = new Image
thevergeB.src = "images/theverge-b.png"

exports.webpaneHeader = new Layer
	y: 0
	width: 750
	height: 174
	image: "images/webpane-header.png"
	superLayer: exports.webpane

exports.webpaneCloseIcon = new Layer
	x: 24
	y: 96
	width: 48
	height: 48
	backgroundColor: null
	superLayer: exports.webpane

exports.webpanerecentsIcon = new Layer
	x: 678
	y: 96
	width: 48
	height: 48
	backgroundColor: null
	superLayer: exports.webpane

exports.navigationBar = new Layer
	y: exports.webpane.height
	width: 750
	height: 100
	image: "images/navigationBar.png"
	superLayer: exports.webpane

exports.navigationBar.states.add
	"visible": y: exports.webpane.height - exports.navigationBar.height

exports.webpaneBackIcon = new Layer
	x: 24
	y: 28
	width: 48
	height: 48
	image: "images/backIcon.png"
	superLayer: exports.navigationBar

exports.webpaneForwardIcon = new Layer
	x: 88
	y: 28
	width: 48
	height: 48
	image: "images/forwardIcon.png"
	superLayer: exports.navigationBar
	opacity: 0.5

