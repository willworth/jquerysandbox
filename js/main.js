//basic js test
console.log("Js coming through...");

// always wait for the page!
$(document).ready(function(){
    $("h1").text("Here is my modified h1 because jquery works!");

    $( ".magic" ).click(function() {
  $( ".magic" ).fadeOut( "slow" );

});



$(function() {
      $(".button").click( function()
           {
             $( ".cookie-banner-visible" ).fadeOut( "slow" );
           }
      );
});





document.cookie = "website=magic";

Cookies.set('fightingStyle', 'drunken');
var allCookies = document.cookie;
console.log("Here are the cookies!", allCookies);
Cookies.get();

});












// $("span").text("$100");