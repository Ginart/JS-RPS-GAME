$(document).ready(function() {


var win = 0;
var lose = 0;
var tie = 0;



$('#Rock').on('click',function(){
	

  $('img').css('border','5px solid #F8F8F8');
  $(this).css('border','5px solid #FF4500');
	
  var rock = "Rock";
  var paper = "Paper";
  var scissors = "Scissors";
	
  var computerChoice = Math.random();	
	
	
	    if (computerChoice < .33) {
            computerChoice = rock;
        } else if (computerChoice < .66) {
            computerChoice = paper;
        } else {
            computerChoice = scissors;
        };

   
	 if(computerChoice == rock)
	 {
		 tie = tie + 1;
		 $('#CMove').text("Rock");
		 $('#PMove').text("Rock");
		 $('#Msg').text("You tie! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 if(computerChoice == paper)
	 {
		 lose = lose + 1;
		 $('#CMove').text("Paper");
		 $('#PMove').text("Rock");
		 $('#Msg').text("You lose! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 if(computerChoice == scissors)
	 {
		 
		 win = win + 1;
		 $('#CMove').text("Scissors");
		 $('#PMove').text("Rock");
		 $('#Msg').text("You Win! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 
	
});


$('#Paper').on('click',function(){
	
	
 $('img').css('border','5px solid #F8F8F8');
 $(this).css('border','5px solid #FF4500');
  var rock = "Rock";
  var paper = "Paper";
  var scissors = "Scissors";
	
  var computerChoice = Math.random();
  var choice = null;	
	
	
	    if (computerChoice < .33) {
            computerChoice = rock;
        } else if (computerChoice < .66) {
            computerChoice = paper;
        } else {
            computerChoice = scissors;
        };

   
	 if(computerChoice == rock)
	 {
		 win = win + 1;
		 $('#CMove').text("Rock");
		 $('#PMove').text("Paper");
		 $('#Msg').text("You Win! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 if(computerChoice == paper)
	 { 
         tie = tie + 1;
		 $('#CMove').text("Paper");
		 $('#PMove').text("Paper");
		 $('#Msg').text("You Tie! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 if(computerChoice == scissors)
	 {
		 
		 lose = lose + 1;
		 $('#CMove').text("Scissors");
		 $('#PMove').text("Paper");
		 $('#Msg').text("You Lose! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 
	
});

$('#Scissors').on('click',function(){
  
  $('img').css('border','5px solid #F8F8F8');
  $(this).css('border','5px solid #FF4500');
	
  var rock = "Rock";
  var paper = "Paper";
  var scissors = "Scissors";
	
  var computerChoice = Math.random();
  var choice = null;	
	
	
	    if (computerChoice < .33) {
            computerChoice = rock;
        } else if (computerChoice < .66) {
            computerChoice = paper;
        } else {
            computerChoice = scissors;
        };

   
	 if(computerChoice == rock)
	 {
		 lose = lose + 1;
		 $('#CMove').text("Rock");
		 $('#PMove').text("Scissors");
		 $('#Msg').text("You Lose! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 if(computerChoice == paper)
	 {
		 win = win + 1;
		 $('#CMove').text("Paper");
		 $('#PMove').text("Scissors");
		 $('#Msg').text("You Win! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 if(computerChoice == scissors)
	 { 
         tie = tie + 1;
		 $('#CMove').text("Scissors");
		 $('#PMove').text("Scissors");
		 $('#Msg').text("You Tie! (Your score:"+win+"/"+tie+"/"+lose+")");
 
		 
	 }
	 
	 
	 
	
});


$.get("http://ipinfo.io", function(response) {
    alert(response.ip);
}, "jsonp");



});