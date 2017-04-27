//basic js test
console.log("Js coming through...");

// always wait for the page!
$(document).ready(function(){
    $("h1").text("Here is my modified h1 because jquery works!");

document.cookie = "website=magic";

Cookies.set('fightingStyle', 'drunken');
var allCookies = document.cookie;
console.log("Here are the cookies!", allCookies);
Cookies.get();

});












// $("span").text("$100");