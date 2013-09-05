var ui = require('nav');
var nav = ui.createNavigatorGroup();

Alloy.Globals.navBar = nav;

function doClick1(e) {
	// Get first window
	var win1 = Alloy.createController('win1').getView();
	nav.open(win1);
};

function doClick2(e) {
	// Get second window
	var win2 = Alloy.createController('win2').getView();
	nav.open(win2);
};

$.mainWin.title = "Test";
nav.open($.mainWin);
