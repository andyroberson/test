/* script.js
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	// $(".background").slideToggle();
  $(".button1").click(function(){
    console.log("im starting to write a click function does it work ok ");

    $(".background").toggle();
  });

  $(".button2").click(function(){
    //CODE GOES HERE
     console.log("hey is this button 2 working?");
     $(".dog").css({"background":"dodgerblue"});

  });

  $(".button3").click(function(){
    //CODE
    $(".nyan-cat").toggleClass("color");
  });

  $(".button4").click(function(){
      $(".nyan-cat").animate({left: "1000px"});
  });

}); //end document.ready block
