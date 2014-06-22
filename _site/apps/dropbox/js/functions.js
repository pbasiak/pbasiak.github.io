// Insert your Dropbox app key here:
var Dropbox = require("dropbox");
var DROPBOX_APP_KEY = 'nx81mklbm5j6ro0';

// Exposed for easy access in the browser console.
var client = new Dropbox.Client({key: DROPBOX_APP_KEY});
$(function () {
	$('.button').click(function (e) {
		e.preventDefault();
		// This will redirect the browser to OAuth login.
		client.authenticate();
	});
	
	// Try to finish OAuth authorization.
	client.authenticate({interactive: false}, function (error) {
	    if (error) {
	        alert('Authentication error: ' + error);
	    }
	});

	if (client.isAuthenticated()) {
		$('.button').append('<h1>Test</h1>');
		client.getAccountInfo(function(error, accountInfo) {
		  if (error) {
		    return showError(error);  // Something went wrong.
		  }

		  alert("Hello, " + accountInfo.name + "!");
		});
	}

	

});