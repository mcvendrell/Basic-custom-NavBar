// Add a the delete button
var btn = Ti.UI.createButton({
	id: "btn",
	title: "btn"
});
Alloy.Globals.navBar.setRightButton($.win1, btn);

// Add the action to the button
btn.addEventListener('click', function() {
	// Autoclose this win
	Alloy.Globals.navBar.close($.win1);
});

