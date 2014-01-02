// ==UserScript==
// @name       Cookie Clicker Helper
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Little auto clicker for game cookie clicker
// @match      http://orteil.dashnet.org/cookieclicker/
// @require http://code.jquery.com/jquery-latest.js
// @copyright  2012+, You
// ==/UserScript==

var interval;
$(document).keypress(function(e) {
    function clicker(){
        $("#bigCookie").click();
    }
    if(e.which == 13) {
        $("#bigCookie").click();
    }
    if(e.which == 81) {
        console.log("auto click start");
        interval = setInterval(clicker,100);
    }
    if(e.which == 87) {
        console.log("auto click stop");
        clearInterval(interval);
    }
});
