exports.createNavigatorGroup = function() {

    var me = {};

    var navViews = []; // A stack of navigation bars
    var navView;

    function pushNavBar() {
        navView = Ti.UI.createView({
            top: 0,
            height: 44,
            backgroundColor: '#BBB'
        });
        navViews.push(navView);
        Ti.API.info("navViews push:" + navViews.length);
    };
    
    function popNavBar() {
        navView = null;
        navViews.pop();
        //navView.removeAllChildren();
        navView = navViews[navViews.length - 1];
    	Ti.API.info("navViews pop:" + navViews.length);
    	Ti.API.info("navView info:" + navView);
    };

    // Make sure we always have a navView available to prepare
    pushNavBar();

    me.open = function(win) {
    	navView.add(Ti.UI.createLabel({
            text: win.title,
            font: {	fontFamily: "Arial", fontSize: 20 },
            color: 'black'
        }));
		
		// For second or more views, add a back button
        if (navViews.length >= 2) {
            var button = Ti.UI.createButton({
                //title: '< ' + navViews[navViews.length - 2].win.title
                title: '<<'
            });
            me.setLeftButton(win, button);
            
            button.addEventListener('click', function() {
                popNavBar();
                win.close();
            });
        }

        Ti.API.info("navViews:" + navViews.length);
    	Ti.API.info("navView info:" + navView);

        win.add(navView);

        Ti.API.info("navView same?: " + (navViews[0] === navViews[1]));
        if (navViews.length >= 2) {
        	Ti.API.info("navView same 1.2?: " + (navViews[1] === navViews[2]));
        }            	
        win.navBarHidden = true;
        win.open();

		// Prepare for the next window
        pushNavBar();
    };

    me.close = function(win) {
        if (navViews.length > 1) {
            // Close the window on this nav
            //win.remove(navView);
            popNavBar();
            win.close();
        }
    };

	// Helper to add a left button
    me.setLeftButton = function(win, button) {
    	if (button.width <= 30 && button.height <= 30) {
    		// Smaller special button, like info button
            button.top = 8;
            button.left = 8;
            button.font = {	fontFamily: "monospace", fontSize: 14 };
    	} else {
	            button.top = 5;
	            button.left = 5;
        }
        navView.add(button);
    };
 
    me.setRightButton = function(win, button) {
        button.top = 5;
        button.right = 5;
        navView.add(button);
    };

    return me;
};