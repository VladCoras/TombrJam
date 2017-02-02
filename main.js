/* -------------------------------------- */
/* Electron framework stuff
/* -------------------------------------- */

var app = require('app');
var BrowserWindow = require('browser-window'); 

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1000, height: 625, frame: false});

	mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

app.on('browser-window-created', function(e, window) {
	window.setMenu(null);
});
/* -------------------------------------- */

