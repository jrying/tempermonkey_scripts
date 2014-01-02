// ==UserScript==
// @name       Facebook mock
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Pretend I'm not using Facebook
// @match      https://www.facebook.com/*
// @copyright  2012+, You
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

//===================Function=====================
function createSheet(src) {
	// Create the <style> tag
	var style = document.createElement("style");

	style.appendChild(document.createTextNode(src));

	document.head.appendChild(style);

	return style.sheet;
};

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

//===================Script=====================

console.log('facebook mock');

// Change favicon
changeFavicon('http://www.google.com/favicon.ico');

// Assemble CSS file
var css = ''
// Layout
css += '#rightCol { display: none; }';
// Color
css += 'a { color: black; }';
css += '.hasSmurfbar #blueBarHolder #blueBar { background: #333333; }';
css += '._kv:hover, ._kv { background-color: #eee; border-color: #999; }';
css += '._kv ._l4, ._kv ._244, ._kv div._246, ._kv ._l6, ._kv ._l1, li._kv ._l3, ._kv ._l0 { color: black; }';
// Image
css += '.uiToggle .fbJewel { background-size: 20px; }';
css += '#pageLogo { background-image: none !important; }';
// Display
css += '.img { display: none !important; }';
css += '.MercuryThreadImage.mrm.lfloat { display: none; }';
css += '.uiButtonGroupItem { display: none !important; }';
css += '#pageHead { opacity: 0.15; }'
css += '#pagelet_dock { opacity: 0.2; }'
css += '.hasLeftCol #mainContainer { border: none; }'
css += ''
css += ''

// Create a css node
var new_sheet = createSheet(css);

// Add extra css rules
//new_sheet.insertRule('', new_sheet.cssRules.length);

console.log('facebook mock loaded');
