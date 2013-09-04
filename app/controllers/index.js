var ui = require('nav');
var nav = ui.createNavigatorGroup();

function doClick1(e) {
	// Get first window
	var win1 = Alloy.createController('win1').getView();
	nav.open(win1, {animated: true});
};

function doClick2(e) {
	// Get second window
	var win2 = Alloy.createController('win2').getView();
	nav.open(win2, {animated: true});
};

$.mainWin.title = 'Main';
nav.open($.mainWin);

Alloy.Globals.navBar = nav;