// index.js
var self = require('sdk/self');
var preferences = require("sdk/simple-prefs").prefs;


// use simple-prefs
// https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/simple-prefs

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function main(text, callback) {
	console.log(preferences.somePreference);
	preferences.somePreference = "this is a new value";

	console.log(prefs["somePreference"]); // bracket notation
	preferences["somePreference"] = "this is the default string value";
  	//callback(text);
}

function onPrefChange(prefName) {
  console.log("The preference " + 
              prefName + 
              " value has changed!");
}

require("sdk/simple-prefs").on("somePreference", onPrefChange);

exports.main = main;