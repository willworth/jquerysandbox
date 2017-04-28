//basic js test
console.log("Js coming through...");
var Cookie = require('js-cookie');

// always wait for the page!
$(document).ready(function(){
    $("h1").text("Here is my modified h1 because jquery works!");

    $( ".magic" ).click(function() {
  $( ".magic" ).fadeOut( "slow" );
document.cookie = "username=John Doe";
});



$(function() {
      $(".willButton").click( function()
           {
             $( ".cookie-banner-visible" ).fadeOut( "slow" );
           }
      );
});




$("#btnSubmit").click(function(){
        $( ".cookie-banner-visible" ).fadeOut( "slow" );
    }); 








document.cookie = "website=magic";

Cookies.set('fightingStyle', 'drunken');
var allCookies = document.cookie;
console.log("Here are the cookies!", allCookies);
Cookies.get();

});












// $("span").text("$100");



$(function(){

   // jQuery methods go here...

});