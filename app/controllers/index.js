var ui = require('nav');
var nav = ui.createNavigatorGroup();

Alloy.Globals.navBar = nav;

function OnAppResume()
{
  Ti.API.info('***---> OnAppResume');
}
 
function OnAppPause()
{
  Ti.API.info('***---> OnAppPause');
}
 

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

if (OS_ANDROID) {
	Ti.Android.currentActivity.addEventListener('resume', OnAppResume);
	Ti.Android.currentActivity.addEventListener('pause', OnAppPause);
}
