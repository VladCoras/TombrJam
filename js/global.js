const remote = require('electron').remote;

var windowParams = {
    params: {
	    mainTitle: $(".js-title"),
	    app: remote.app,
	},

	changeTitle: function (title) { this.params.mainTitle.text(title) },
	
    /**
    * function: displayControl
    * args: command - helps to determine what action is needed
    * TODO: 
    */
	displayControl: function(command) {
		var _window = remote.getCurrentWindow();
		if (command == "min") { _window.minimize(); }
		if (command == "max") { !_window.isMaximized() ? window.maximize() : window.unmaximize(); } 
		if (command == "exit") { _window.close(); } 
	},

}

$('.js-min-app').click(function () { windowParams.displayControl("min") });
$('.js-max-app').click(function() { windowParams.displayControl("max") });
$('.js-exit-app').click(function() { windowParams.displayControl("exit") });
/* -------------------------------------- */


/* -------------------------------------- */
/* Run after window is ready
/* -------------------------------------- */
$(document).ready(function () {

    windowParams.changeTitle("TombrJam - alpha v" + windowParams.params.app.getVersion()); // Update title
});
