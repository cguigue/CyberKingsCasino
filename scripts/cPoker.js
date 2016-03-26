// JavaScript Document

$(function() {
$( "#button")
.button()
.click(function( dealer ) {
event.preventDefault();
});
});

$(function() {
$( "#leave")
.button()
.click(function( leaveGame ) {
event.preventDefault();
});
});

 $(function() {
$( "#checkCard")
.button()
.click(function( checkWin ) {
event.preventDefault();
});
});

 $(function() {
$( "#replay")
.button()
.click(function( replay ) {
event.preventDefault();
});
});

 $(function() {
$( document ).tooltip({
position: {
my: "left+250",
at: "center top",
}
});
});

 $(function(){
$("#generateCard5").click(function(){
    $("#isDiscard5").fadeIn(300);
	
	$("#isDiscard5").animate({
		height:"120px",
		fontSize:"3em",
	    color:"yellow"
	}, 600);
	
	 $( "#isDiscard5" ).toggle( "scale", 300 );
  });
});	

 $(function(){
$("#generateCard4").click(function(){
    $("#isDiscard4").fadeIn(300);
	
		$("#isDiscard4").animate({
		height:"120px",
		fontSize:"3em",
	    color:"yellow"
	}, 600);
	
	 $( "#isDiscard4" ).toggle( "scale", 300 );
	
  });
});	

 $(function(){
$("#generateCard3").click(function(){
    $("#isDiscard3").fadeIn(300);
	
		$("#isDiscard3").animate({
		height:"120px",
		fontSize:"3em",
	    color:"yellow"
	}, 600);
	
	$( "#isDiscard3" ).toggle( "scale", 300 );
  });
});	

 $(function(){
$("#generateCard2").click(function(){
    $("#isDiscard2").fadeIn(300);
	
		$("#isDiscard2").animate({
		height:"120px",
		fontSize:"3em",
	    color:"yellow"
	}, 600);
	
	$( "#isDiscard2" ).toggle( "scale", 300 );
  });
});	

 $(function(){
$("#generateCard1").click(function(){
    $("#isDiscard1").fadeIn(300);
	
		$("#isDiscard1").animate({
		height:"120px",
		fontSize:"3em",
	    color:"yellow"
	}, 600);
	
	$( "#isDiscard1" ).toggle( "scale", 300 );
  });
});	

var myDeck = new Array(52);
var changeCard = new Array();
var newCard = new Array();
var betNumber = 0;

var onePair = false;
var twoPair = false;
var threeKind = false;
var straight = false;
var flush = false;
var fullHouse = false;
var fourKind = false;
var straightFlush = false;
var royalFlush = false;

var position1 = 0;
var position2 = 0;
var position3 = 0;
var position4 = 0;
var position5 = 0;

var counter1 = 1;
var counter2 = 1;
var counter3 = 1;
var counter4 = 1;
var counter5 = 1;

//END VARIABLES-------------------------------------->
		
	newCard[1] = Math.floor(Math.random()*52);
	newCard[2] = Math.floor(Math.random()*52);
	
	while(newCard[2] == newCard[1])
	{
		 newCard[2] = Math.floor(Math.random()*52);	 
	}

	newCard[3] = Math.floor(Math.random()*52);
	
	while(newCard[3] == newCard[2]||newCard[3] == newCard[1])
	{
		 newCard[3] = Math.floor(Math.random()*52);
	}

	newCard[4] = Math.floor(Math.random()*52);
	
	while(newCard[4] == newCard[3]||newCard[4]== newCard[2]||newCard[4]== newCard[1])
	{
		 newCard[4] = Math.floor(Math.random()*52);
	}
  
	newCard[5] = Math.floor(Math.random()*52);	
	
	while(newCard[5] == newCard[4]||newCard[5] == newCard[3]||newCard[5] == newCard[2]||newCard[5] == newCard[1])
	{
		 newCard[5] = Math.floor(Math.random()*52); 
	}

for (var i = 0; i < myDeck.length; i++){
	myDeck[i] = new Image();
	myDeck[i].src = "images/card" + (i+1) + ".gif";
}

function updateCookie(amtRemaining){
	var myDate = new Date();
	myDate.setFullYear(myDate.getFullYear() + 1);
	document.cookie = "bankRoll=" + encodeURIComponent(amtRemaining) + "; expires=" + myDate.toUTCString();
}

function setDefaults(){
document.getElementById("bet").value = "Bet";
} 

function createDeck() 
{			
	changeCard[1] = Math.floor(Math.random()*52);
	changeCard[2] = Math.floor(Math.random()*52);
	
	while(changeCard[2] == changeCard[1])
	{
		 changeCard[2] = Math.floor(Math.random()*52);	 
	}

	changeCard[3] = Math.floor(Math.random()*52);
	
	while(changeCard[3] == changeCard[2]||changeCard[3] == changeCard[1])
	{
		 changeCard[3] = Math.floor(Math.random()*52);
	}

	changeCard[4] = Math.floor(Math.random()*52);
	
	while(changeCard[4] == changeCard[3]||changeCard[4]== changeCard[2]||changeCard[4]== changeCard[1])
	{
		 changeCard[4] = Math.floor(Math.random()*52);
	}
  
	changeCard[5] = Math.floor(Math.random()*52);	
	
	while(changeCard[5] == changeCard[4]||changeCard[5] == changeCard[3]||changeCard[5] == changeCard[2]||changeCard[5] == changeCard[1])
	{
		 changeCard[5] = Math.floor(Math.random()*52); 
	}
} //RANDOMIZE 5 CARDS-------------------------------------->

function dealer(){
	betAmount = parseInt(document.getElementById("bet").value);
	
	if(document.getElementById("bet").value == "Bet")
		{
			alert("Invalid bet");
			document.getElementById("bet").value= "Bet";			
			return false;	
		}
	else if (betAmount < 0)
		{
			alert("Invalid bet. Must be over 0");
			document.getElementById("bet").value = "Bet";	
			return false;
		}
	else if (isNaN(betAmount))
		{
			alert("Invalid bet. Integers only");
			document.getElementById("bet").value = "Bet";	
			return false;
		}
	else if (betAmount > parseInt(bankRoll))
		{
			alert("Invalid bet. You do not have enough money");
			document.getElementById("bet").value = "Bet";
			return false;
		}
	else 
		{
			alert("You have placed a bet of " + betAmount);
			bankRoll -= betAmount;
			bankroll.innerHTML = bankRoll;
			updateCookie(bankRoll);
		}
			++betNumber;
			if (betNumber == 1)
				{
					document.getElementById("bet").value = "Bet";
					moveCards();
					createDeck();
					document.getElementById('generateCard1').src = myDeck[changeCard[1]].src;
					document.getElementById('generateCard2').src = myDeck[changeCard[2]].src;
					document.getElementById('generateCard3').src = myDeck[changeCard[3]].src;
					document.getElementById('generateCard4').src = myDeck[changeCard[4]].src;
					document.getElementById('generateCard5').src = myDeck[changeCard[5]].src;
				}
				
			if (betNumber == 2)
				{	
					bankRoll += betAmount;
					bankroll.innerHTML =bankRoll;
					updateCookie(bankRoll);
					document.getElementById("bet").value= "Bet";
					document.getElementById("bet").disabled = true;
					document.getElementById("button").disabled = true;
			}	
}

function moveCards()
{
	moveLeft1 = document.getElementById("generateCard1") 
	moveLeft2 = document.getElementById("generateCard2") 
	moveLeft3 = document.getElementById("generateCard3") 
	moveLeft4 = document.getElementById("generateCard4") 
	moveLeft5 = document.getElementById("generateCard5") 
	setInterval("moveme1()", 50);
	setInterval("moveme2()", 50);
	setInterval("moveme3()", 50);
	setInterval("moveme4()", 50);
	setInterval("moveme5()", 50);
}

function moveme1(){
	
		$("#generateCard1").animate({
							   left: "0px"
							   }, 2000)
	
	
	
//    position1 += 15;
//    moveLeft1.style.left = position1 + "px";
//    if (position1 >= 35){
//        position1 -= 15;
//    }    
}

function moveme2(){
	
		$("#generateCard2").animate({
							   left: "30px"
							   }, 2000)
	
	
	
//    position2 += 15;
//    moveLeft2.style.left = position2 + "px";
//    if (position2 >= 100){
//        position2 -= 15;
//    }    
}

function moveme3(){
	
	
		$("#generateCard3").animate({
							   left: "60px"
							   }, 2000)
	
//    position3 += 15;
//    moveLeft3.style.left = position3 + "px";
//    if (position3 >= 200){
//        position3 -= 15;
//    }    
}

function moveme4(){
	
		$("#generateCard4").animate({
							   left: "90px"
							   }, 2000)
	
//    position4 += 15;
//    moveLeft4.style.left = position4 + "px";
//    if (position4 >= 300){
//        position4 -= 15;
//    }    
}

function moveme5(){
	
	$("#generateCard5").animate({
							   left: "120px"
							   }, 2000)
	
	
//    position5 += 15;
//    moveLeft5.style.left = position5 + "px";
//    if (position5 >= 400){
//        position5 -= 15;
//    }    

}

function flipCard1() 
{
	if (betNumber == 1){
		if (counter1 == 0){
			document.getElementById('generateCard1').src = myDeck[changeCard[1]].src;
		counter1++;
		}
		else if (counter1 == 1){
			document.getElementById('generateCard1').src = "images/b2fv.jpg";
			counter1--;
		}
	}
}

function flipCard2() 
{
	if (betNumber == 1){
		if (counter2 == 0){
			document.getElementById('generateCard2').src = myDeck[changeCard[2]].src;
		counter2++;
		}
		else if (counter2 == 1){
		document.getElementById('generateCard2').src = "images/b2fv.jpg";
			counter2--;
		}
	}
}

function flipCard3() 
{
	if (betNumber == 1){
		if (counter3 == 0){
			document.getElementById('generateCard3').src = myDeck[changeCard[3]].src;
		counter3++;
		}
		else if (counter3 == 1){
		document.getElementById('generateCard3').src = "images/b2fv.jpg";
			counter3--;
		}
	}
}

function flipCard4() 
{
	if (betNumber == 1){
		if (counter4 == 0){
			document.getElementById('generateCard4').src = myDeck[changeCard[4]].src;
		counter4++;
		}
		else if (counter4 == 1){
		document.getElementById('generateCard4').src = "images/b2fv.jpg";
			counter4--;
		}
	}
}

function flipCard5() 
{
	if (betNumber == 1){
		if (counter5 == 0){
			document.getElementById('generateCard5').src = myDeck[changeCard[5]].src;
		counter5++;
		}
		else if (counter5 == 1){
		document.getElementById('generateCard5').src = "images/b2fv.jpg";
			counter5--;
		}
	}
}

function checkWin()
{
	if (betNumber != 2)
	{
		alert("Please bet another time");
	}
	else if (betNumber == 2)
	{ 
		if (counter1 == 0)
			{
		   	   document.getElementById("generateCard1").src = myDeck[newCard[1]].src;
		 	}

		if (counter2 == 0)
			{
		   	   document.getElementById("generateCard2").src = myDeck[newCard[2]].src;
		 	}
	
		if (counter3 == 0)
			{
		   	   document.getElementById("generateCard3").src = myDeck[newCard[3]].src;
		 	}
	
		if (counter4 == 0)
			{
		   	   document.getElementById("generateCard4").src = myDeck[newCard[4]].src;
		 	}

		if (counter5 == 0)
			{
		   	   document.getElementById("generateCard5").src = myDeck[newCard[5]].src;
		 	}

		}
 		document.getElementById("checkCard").disabled = true;
			verifyHand();
} 

function replay()
{
var reloadPage = confirm("Are you sure you want to replay?");
if (reloadPage == true){
window.location.reload();
}
document.getElementById("bet").value= "Bet";
document.getElementById("bet").disabled = false;
document.getElementById("button").disabled = false;
document.getElementById("checkCard").disabled = false;
}

function checkOnePair(){

}

function checkTwoPair(){
	if (winCard1 == winCard2 && winCard3 == winCard4 &&
		winCard3 != winCard5 || winCard1 == winCard2 && 
		winCard4 == winCard5 && winCard4 != winCard3 ||
		winCard2 == winCard3 && winCard4 == winCard5 &&
		winCard2 != winCard1)	
		{
			return true;
		}
}

function checkThreeKind(){
	if (winCard1 == winCard2 && winCard2 == winCard3 && winCard1 != winCard4 && winCard1 != winCard5 ||	
	winCard1 == winCard2 && winCard2 == winCard4 && winCard1 != winCard3 && winCard1 != winCard5 ||	
	winCard1 == winCard2 && winCard2 == winCard5 && winCard1 != winCard3 && winCard1 != winCard4 ||
	winCard2 == winCard3 && winCard3 == winCard4 && winCard2 != winCard1 && winCard2 != winCard5 ||
	winCard2 == winCard3 && winCard3 == winCard5 && winCard2 != winCard1 && winCard2 != winCard4 ||
	winCard3 == winCard4 && winCard4 == winCard5 && winCard3 != winCard1 && winCard3 != winCard2)
	{
		return true;
		checkOnePair() = false;
	} 
}

function checkStraight()
{
	if (winCard1 - 1 == winCard2 && winCard2 -1 == winCard3 &&
		winCard3 - 1 == winCard4 && winCard4 -1 == winCard5)
		{
			return true;
		}
}

function checkFlush() {
	if (cardSuit1 == cardSuit2 && cardSuit2 == cardSuit3 && 
		cardSuit3 == cardSuit4 && cardSuit4 == cardSuit5)
	{
		return true;
	}
}

function checkFullHouse() {
	
}


function verifyHand() 
{   if (checkOnePair() == true)
		{
		alert("One pair $" + betAmount*1);
	    moneyRemaining += betAmount * 1;
		bankMoney.innerHTML = "$" + moneyRemaining; 
		}
	else if (checkTwoPair() == true)
	{
		alert("Two Pairs. You won $" + betAmount*2);
	    moneyRemaining += betAmount * 2;
		bankMoney.innerHTML = "$" + moneyRemaining;
	}
	else if(checkThreeKind() == true)
	{
		alert("Three of a Kind. You won $" + betAmount*3);
	    moneyRemaining += betAmount * 3;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else if (checkStraight() == true)
	{
		alert("Straight. You won $" + betAmount*4);
	    moneyRemaining += betAmount * 4;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else if(checkFlush() == true)
	{
		alert("Flush. You won $" + betAmount*5);
	    moneyRemaining += betAmount * 5;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	 }
	else if(checkFullHouse() == true && twoPair == true)
	{
		alert("Three of Kind. You won $" + betAmount*6);
	  	moneyRemaining += betAmount * 6;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else if(checkFourKind() == true)
	{
		alert("Four of a kind. You won $" + betAmount*25);
	   	moneyRemaining += betAmount * 25;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else if (checkFlush() == true && checkStraight() == true)
	{
		alert("Straight Flush. You won $" + betAmount*50);
	    moneyRemaining += betAmount * 50;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else if (checkFlush() == true && checkRoyalStraight() == true)
	{
		alert("Royal Flush. You won $" + betAmount*250);
	    moneyRemaining += betAmount * 250;
		bankMoney.innerHTML = "$" + moneyRemaining; 
	}
	else 
	{
		loser();
	}
}

function leaveGame()
{
	window.location.href = "pickGame.html";	
}



