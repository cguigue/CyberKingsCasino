var hand = new Array("","","","","");
var fullDeck = new Array(
			"c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13",
			"d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13",
			"h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13",
			"s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13");
var counter = 0;
var bankRoll = 0;
var theBet = 0;
var lastName = "";
var firstName = "";
var phoneNum = "";
var pCode = "";
var lastVisit = "";

var cardCounter0 = 0;
var cardCounter1 = 0;
var cardCounter2 = 0;
var cardCounter3 = 0;
var cardCounter4 = 0;

function getFormInfo()
{
	if(!(document.cookie))
	{
		window.location.href = "intro.html";
	}

	var cookieString = decodeURIComponent(document.cookie);
	var cookieArray = cookieString.split("; ");
	
	
	for(var i = 0; i < cookieArray.length; ++i)
	{
		if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "lastName")
			lastName = cookieArray[0].substring(cookieArray[0].indexOf('=') + 1);

		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "firstName")
			firstName = cookieArray[1].substring(cookieArray[1].indexOf('=') + 1);

		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "phoneNum")
			phoneNum = cookieArray[2].substring(cookieArray[2].indexOf('=') + 1);
	
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "pCode")
			pCode = cookieArray[3].substring(cookieArray[3].indexOf('=') + 1);
		
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "bankRoll")
			bankRoll = parseInt(cookieArray[4].substring(cookieArray[4].indexOf('=') + 1));
				
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "lastVisit")
			lastVisit = cookieArray[5].substring(cookieArray[5].indexOf('=') + 1);
				
		}

	var now = new Date();
	var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var day = now.getDay();
	var date = now.getDate();
	var year = now.getFullYear();
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var month = now.getMonth();
	var hours = now.getHours();
	var oClock = "AM";
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	if(hours > 12)
	{
		hours -= 12;
		oClock = "PM";
	}
	if(hours < 10)
	{
		hours = "0" + hours;
	}
	if(minutes < 10)
	{
		minutes = "0" + minutes;
	}
	lastVisit = days[day] + " the " + date + ", " + months[month] + " " + year + " at " + hours + ":" + minutes + " " + oClock;
}

function cards() 
{
	if(isNaN(document.getElementById("wagerAmount").value))
	{
		var message = "You can't bet that, your highness!";
		var titleMessage = "Take heed!";
	dialog(message, titleMessage);
	}
	else if(parseInt(document.getElementById("wagerAmount").value) > bankRoll)
	{
		var message = "You can't bet money you don't have, your highness!";
		var titleMessage = "Take heed!";
	dialog(message, titleMessage);
	}
	else if(parseInt(document.getElementById("wagerAmount").value) <= 0)
	{
		var message = "You can't bet nothing, and you certainly can't bet less than that, your highness!";
		var titleMessage = "Take heed!";
	dialog(message, titleMessage);
	}
	else if(document.getElementById("buttonPlayorNew").value == "Feeling Lucky?" && 
	parseInt(document.getElementById("wagerAmount").value) > parseInt(theBet))
	{
		var message = "Your second bet can not be more than your first bet, your highness!";
		var titleMessage = "Take heed!";
	dialog(message, titleMessage);
	}
	else
	{
		if (document.getElementById("buttonPlayorNew").value == "Play!" ||
			document.getElementById("buttonPlayorNew").value == "Play again?")
		{	
			theBet = document.getElementById("wagerAmount").value;
			bankRoll -= theBet;
			$("#bankroll").html(bankRoll);
			$("#changeHandWorth").html("");	
			$("#wagerAmount").val("");
			
		hand[0] = fullDeck[Math.floor((Math.random()*52))];
		hand[1] = fullDeck[Math.floor((Math.random()*52))];
			while(hand[1] == hand[0])
			{
			hand[1] = fullDeck[Math.floor((Math.random()*52))];
			}
		hand[2] = fullDeck[Math.floor((Math.random()*52))];
			while(hand[2] == hand[0] || hand[2] == hand[1])
			{
			hand[2] = fullDeck[Math.floor((Math.random()*52))];
			}
		hand[3] = fullDeck[Math.floor((Math.random()*52))];
			while(hand[3] == hand[0] || hand[3] == hand[1] || hand[3] == hand[2])
			{
			hand[3] = fullDeck[Math.floor((Math.random()*52))];	
			}
		hand[4] = fullDeck[Math.floor((Math.random()*52))];
			while(hand[4] == hand[0] || hand[4] == hand[1] || hand[4] == hand[2] || hand[4] == hand[3])
			{
			hand[4] = fullDeck[Math.floor((Math.random()*52))];	
			}	
		organize();
		}
		else
		{
			
			if(!($("#wagerAmount").value == ""))
			{
				theBet = parseInt(theBet);
				theBet += parseInt(document.getElementById("wagerAmount").value);
				bankRoll -= parseInt(document.getElementById("wagerAmount").value);
				document.getElementById("bankroll").innerHTML = "$" + bankRoll;
			}
			
			drawCards();
		}
	}
}//function cards()

function organize()
{
var sorted = false;
var change = 0;
var loopend = 5;
var compCard1;
var compCard2;
while(loopend > 1 && sorted == false)
	{
	sorted = true;
	for (var i = 1; i < loopend; ++i)
		{
		compCard1 = parseInt(hand[i-1].substr(1));
		compCard2 = parseInt(hand[i].substr(1));
		if(compCard1 > compCard2)
			{
			change = hand[i-1];
			hand[i-1] = hand[i];
			hand[i] = change;
			sorted = false;
			}//IF
		}//FOR
	--loopend;
	}//WHILE - Used to organize the cards.

if(counter == 1)
{
document.getElementById("cardImg0").src =  "images/theDeck/" + hand[0] + ".gif";
document.getElementById("cardImg1").src =  "images/theDeck/" + hand[1] + ".gif";
document.getElementById("cardImg2").src =  "images/theDeck/" + hand[2] + ".gif";
document.getElementById("cardImg3").src =  "images/theDeck/" + hand[3] + ".gif";
document.getElementById("cardImg4").src =  "images/theDeck/" + hand[4] + ".gif";
document.getElementById("changeHandWorth").innerHTML = worth();
document.getElementById("buttonPlayorNew").value = "Play again?";
counter = 0;
bankRoll = parseInt(bankRoll) + parseInt(theBet);

if(theBet > 0)
{
	
	}
else{}

$("#bankroll").html(bankRoll);
document.getElementById("wagerAmount").value = 0;
bakeCookie();
	if(theBet > 0)
	{		
var message = "Congratulations! You won $" + theBet + "!";
var titleMessage = "Congratulations!";
	dialog(message, titleMessage);
	}
	else
	{}
	if(bankRoll == 0)
	{
	var message = "We're sorry, but you are out of funds. We hope you enjoyed your time at the King's Casino! Come again soon!";
	var titleMessage = "Thanks for visiting!";
	dialog(message, titleMessage);
		eatCookie();
	}
	else
	{}
	
	}
else
{

document.getElementById("cardImg0").src =  "images/theDeck/" + hand[0] + ".gif";
document.getElementById("cardImg1").src =  "images/theDeck/" + hand[1] + ".gif";
document.getElementById("cardImg2").src =  "images/theDeck/" + hand[2] + ".gif";
document.getElementById("cardImg3").src =  "images/theDeck/" + hand[3] + ".gif";
document.getElementById("cardImg4").src =  "images/theDeck/" + hand[4] + ".gif";
counter = 1;
cardAnimation();
document.getElementById("changeHandWorth").innerHTML = "Feeling lucky? Bet again before the draw!";
document.getElementById("buttonPlayorNew").value = "Feeling Lucky?";
cardCounter0 = 0;
cardCounter1 = 0;
cardCounter2 = 0;
cardCounter3 = 0;
cardCounter4 = 0;
}
}


function worth()
{
	var handRoyalFlush = false;
	var handStraightFlush = false;
	var hand4ofakind = false;
	var handFullHouse = false;
	var handFlush = false;	
	var handStraight = false;
	var hand3ofakind = false;
	var hand2pair = false;
	var handPair = false;
	var handNothing = true;
	
//IF statement - Flush
	if(
	   hand[0].substring(0,1) == hand[1].substring(0,1) &&
	   hand[0].substring(0,1) == hand[2].substring(0,1) &&
	   hand[0].substring(0,1) == hand[3].substring(0,1) &&
	   hand[0].substring(0,1) == hand[4].substring(0,1))
	{handFlush = true;}
//IF statement - Flush
//FOR statement - Straight
	var strTemp0 = parseInt(hand[0].substring(1));
	var strTemp1 = parseInt(hand[1].substring(1));
	var strTemp2 = parseInt(hand[2].substring(1));
	var strTemp3 = parseInt(hand[3].substring(1));
	var strTemp4 = parseInt(hand[4].substring(1));
	if(	strTemp0+1 == strTemp1 &&
		strTemp0+2 == strTemp2 &&
		strTemp0+3 == strTemp3 &&
		strTemp0+4 == strTemp4
		)
	{
		handStraight = true;
	}
	else if(
		hand[0].substring(1) == 1	&&
		hand[1].substring(1) == 10	&&
		hand[2].substring(1) == 11	&&
		hand[3].substring(1) == 12	&&
		hand[4].substring(1) == 13	)
		{	handStraight = true;}
//FOR statement - Straight

	else{
		//IF statement - Four of a kind
		if((
		hand[0].substring(1) ==	hand[1].substring(1) &&
		hand[0].substring(1) ==	hand[2].substring(1) &&
		hand[0].substring(1) ==	hand[3].substring(1))
		||
		(	
		hand[1].substring(1) == hand[2].substring(1) &&
		hand[1].substring(1) == hand[3].substring(1) &&
		hand[1].substring(1) == hand[4].substring(1)))
		{	hand4ofakind = true;}
		//IF statement - Four of a kind
			
		//ELSE IF statement - Full House
			else if(((
		hand[0].substring(1) ==	hand[1].substring(1) &&
		hand[0].substring(1) ==	hand[2].substring(1))&&
		(
		hand[3].substring(1) ==	hand[4].substring(1)))
		||	
		((
		hand[0].substring(1) ==	hand[1].substring(1))&&
		(
		hand[2].substring(1) ==	hand[3].substring(1) &&
		hand[2].substring(1) ==	hand[4].substring(1))))
		{	handFullHouse = true;}
		//ELSE IF statement - Full House

		//ELSE IF statement - 3 of a kind
		else if ((
		hand[0].substring(1) ==	hand[1].substring(1) &&
		hand[0].substring(1) ==	hand[2].substring(1))
		||		
		(
		hand[1].substring(1) ==	hand[2].substring(1) &&
		hand[1].substring(1) ==	hand[3].substring(1))
		||		
		(
		hand[2].substring(1) ==	hand[3].substring(1) &&
		hand[2].substring(1) ==	hand[4].substring(1)))
		{	hand3ofakind = true;}
		//ELSE IF statement - 3 of a kind

		//ELSE IF statement - 2 pair
		else if((
		hand[0].substring(1) ==	hand[1].substring(1) &&
		hand[2].substring(1) ==	hand[3].substring(1))
		||		
		(
		hand[0].substring(1) ==	hand[1].substring(1) &&
		hand[3].substring(1) ==	hand[4].substring(1))
		||		
		(
		hand[1].substring(1) ==	hand[2].substring(1) &&
		hand[3].substring(1) ==	hand[4].substring(1)))
		{	hand2pair = true;}
		//ELSE IF statement - 2 pair
		
		//ELSE IF statement - pair
		else if(
		hand[0].substring(1) ==	hand[1].substring(1) ||
		hand[1].substring(1) ==	hand[2].substring(1) ||
		hand[2].substring(1) ==	hand[3].substring(1) ||
		hand[3].substring(1) ==	hand[4].substring(1))
		{	handPair = true;}
		//ELSE IF statement - pair
		else
		{	handNothing = true;}
	}
	
	if(handFlush == true && 
		hand[0].substring(1) == 1	&&
		hand[1].substring(1) == 10	&&
		hand[2].substring(1) == 11	&&
		hand[3].substring(1) == 12	&&
		hand[4].substring(1) == 13)
	{	handRoyalFlush = true;}
	
	if( handFlush == true &&
		handStraight == true)
	{	handStraightFlush == true}

if(handRoyalFlush == true)
{
	theBet = theBet * 250;
	handRoyalFlush = false;
	return "Congratulations! You got a Royal Flush!";
}
else if (handStraightFlush == true)
{
	theBet = theBet * 50;
	handStraightFlush = false;
	return "Congratulations! You got a Straight Flush!";
}
else if(hand4ofakind == true)
{
	theBet = theBet * 25;
	handStraightFlush = false;
	return "Congratulations! You got a 4 of a kind!";
}
else if(handFullHouse == true)
{
	theBet = theBet * 6;
	handFullHouse = false;
	return "Congratulations! You got a Full House!";
}
else if(handFlush == true)
{
	theBet = theBet * 5;
	handFlush = false;
	return "Congratulations! You got a Flush!";
}
else if(handStraight == true)
{
	theBet = theBet * 4;
	handStraight = false;
	return "Congratulations! You got a Straight!";
}
else if(hand3ofakind == true)
{
	theBet = theBet * 3;
	hand3ofakind = false;
	return "Congratulations! You got a 3 of a kind!";

}
else if(hand2pair == true)
{
	theBet = theBet * 2;
	hand2pair = false;
	return "Congratulations! You got a 2 Pair!";
}
else if(handPair == true)
{
	handPair = false;
	return "Congratulations! You got a Pair!";
}
else
{
	theBet = 0;
	return "Sorry! Please try again!";
}
}


function cardChange0 ()
{	
	if(document.getElementById("buttonPlayorNew").value == "Play again?" || document.getElementById("buttonPlayorNew").value == "Play!")
	{} 	
	else
	{	if(cardCounter0 == 1)
		{	cardCounter0 = 0;
			document.getElementById("cardImg0").src = "images/theDeck/" + hand[0] + ".gif";}
		else
		{	++cardCounter0;
			document.getElementById("cardImg0").src = "images/theDeck/backCard.gif";}}}
function cardChange1 ()
{	
	if(document.getElementById("buttonPlayorNew").value == "Play again?" || document.getElementById("buttonPlayorNew").value == "Play!")
	{} 	
	else
	{	if(cardCounter1 == 1)
		{	cardCounter1 = 0;
			document.getElementById("cardImg1").src = "images/theDeck/" + hand[1] + ".gif";}
		else
		{	++cardCounter1;
			document.getElementById("cardImg1").src = "images/theDeck/backCard.gif";}}}
function cardChange2 ()
{	
	if(document.getElementById("buttonPlayorNew").value == "Play again?" || document.getElementById("buttonPlayorNew").value == "Play!")
	{} 	
	else
	{	if(cardCounter2 == 1)
		{	cardCounter2 = 0;
			document.getElementById("cardImg2").src = "images/theDeck/" + hand[2] + ".gif";}
		else
		{	++cardCounter2;
			document.getElementById("cardImg2").src = "images/theDeck/backCard.gif";}}}
function cardChange3 ()
{	
	if(document.getElementById("buttonPlayorNew").value == "Play again?" || document.getElementById("buttonPlayorNew").value == "Play!")
	{} 	
	else
	{	if(cardCounter3 == 1)
		{	cardCounter3 = 0;
			document.getElementById("cardImg3").src = "images/theDeck/" + hand[3] + ".gif";}
		else
		{	++cardCounter3;
			document.getElementById("cardImg3").src = "images/theDeck/backCard.gif";}}}
function cardChange4()
{	
	if(document.getElementById("buttonPlayorNew").value == "Play again?" || document.getElementById("buttonPlayorNew").value == "Play!")
	{} 	
	else
	{	if(cardCounter4 == 1)
		{	cardCounter4 = 0;
			document.getElementById("cardImg4").src = "images/theDeck/" + hand[4] + ".gif";}
		else
		{	++cardCounter4;
			document.getElementById("cardImg4").src = "images/theDeck/backCard.gif";}}}



function drawCards ()
{
var temp0 = fullDeck[Math.floor((Math.random()*52))];
			while(temp0 == hand[0] || temp0 == hand[1] || temp0 == hand[2] || temp0 == hand[3] || temp0 == hand[4])
			{	temp0 = fullDeck[Math.floor((Math.random()*52))];}
var temp1 = fullDeck[Math.floor((Math.random()*52))];
			while(temp1 == hand[0] || temp1 == hand[1] || temp1 == hand[2] || temp1 == hand[3] || temp1 == hand[4] || temp1 == temp0)
			{	temp1 = fullDeck[Math.floor((Math.random()*52))];}
var temp2 = fullDeck[Math.floor((Math.random()*52))];
			while(temp2 == hand[0] || temp2 == hand[1] || temp2 == hand[2] || temp2 == hand[3] || temp2 == hand[4] || temp2 == temp1 || temp2 == temp0)
			{	temp2 = fullDeck[Math.floor((Math.random()*52))];}
var temp3 = fullDeck[Math.floor((Math.random()*52))];
			while(temp3 == hand[0] || temp3 == hand[1] || temp3 == hand[2] || temp3 == hand[3] || temp3 == hand[4] || temp3 == temp2 || temp3 == temp1 || temp3 == temp0)
			{	temp3 = fullDeck[Math.floor((Math.random()*52))];}
var temp4 = fullDeck[Math.floor((Math.random()*52))];
			while(temp4 == hand[0] || temp4 == hand[1] || temp4 == hand[2] || temp4 == hand[3] || temp4 == hand[4] || temp4 == temp3 || temp4 == temp2 || temp4 == temp1 || temp4 == temp0)
			{	temp4 = fullDeck[Math.floor((Math.random()*52))];}

	if(cardCounter0 == 1)
		{	hand[0] = temp0;
			cardAnim0();
		}
	
	if(cardCounter1 == 1)
		{	hand[1] = temp1;
			cardAnim1();
		}
	
	if(cardCounter2 == 1)
		{	hand[2] = temp2;
			cardAnim2();
			}
		
	if(cardCounter3 == 1)
		{	hand[3] = temp3;
		cardAnim3();
		}

	if(cardCounter4 == 1)
		{	hand[4] = temp4;
		cardAnim4();
		}
		
		//setTimeout(organize(), 1000);
		organize();
}

function done()
{
	bakeCookie();
	window.location.href = "pickGame.html";	
}





function bakeCookie()
{
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+12);	
	document.cookie = "lastName=" + encodeURIComponent(lastName) + "; expires=" + expireDate.toUTCString();
	document.cookie = "firstName=" + encodeURIComponent(firstName) + "; expires=" + expireDate.toUTCString();
	document.cookie = "phoneNum=" + encodeURIComponent(phoneNum) + "; expires=" + expireDate.toUTCString();
	document.cookie = "pCode=" + encodeURIComponent(pCode) + "; expires=" + expireDate.toUTCString();
	document.cookie = "bankRoll=" + encodeURIComponent(bankRoll) + "; expires=" + expireDate.toUTCString();
	document.cookie = "lastVisit=" + encodeURIComponent(lastVisit) + "; expires=" + expireDate.toUTCString();
	
}


function eatCookie()
{
	
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()-1);	
	document.cookie = "lastName=; expires=" + expireDate.toUTCString();
	document.cookie = "firstName=; expires=" + expireDate.toUTCString();
	document.cookie = "phoneNum=; expires=" + expireDate.toUTCString();
	document.cookie = "pCode=; expires=" + expireDate.toUTCString();
	document.cookie = "bankRoll=; expires=" + expireDate.toUTCString();
	document.cookie = "lastVisit=; expires=" + expireDate.toUTCString();
	window.location.href = "intro.html";
}




var curPosition0;
var curPosition1;
var curPosition2;
var curPosition3;
var curPosition4;

function cardAnimation()
{
	$("#cardImg0").css("left", "-1000px");
	$("#cardImg1").css("left", "-1000px");
	$("#cardImg2").css("left", "-1000px");
	$("#cardImg3").css("left", "-1000px");
	$("#cardImg4").css("left", "-1000px");

cardAnim0();
setTimeout(cardAnim1, 400);
setTimeout(cardAnim2, 900);
setTimeout(cardAnim3, 1400);
setTimeout(cardAnim4, 1900);
}
function cardAnim0()
{
	$("#cardImg0").css("left", "-50px");
	$("#cardImg0").animate({
	left: "100px"
	}, 500);	
}///////////////////////////////////////////////////
function cardAnim1()
{
	$("#cardImg1").css("left", "-150px");
	$("#cardImg1").animate({
	left: "100px"
	}, 500);	
}
function cardAnim2()
{
	$("#cardImg2").css("left", "-250px");
	$("#cardImg2").animate({
	left: "100px"
	}, 500);	
}
function cardAnim3()
{
	$("#cardImg3").css("left", "-350px");
	$("#cardImg3").animate({
	left: "100px"
	}, 500);	
}
function cardAnim4()
{
	$("#cardImg4").css("left", "-450px");
	$("#cardImg4").animate({
	left: "100px"
	}, 500);	
}
	
function dialog(theMessage, theTitle)
{
			 $(function() {
$( "#dMessage" ).dialog({
modal: true,
title: theTitle,
buttons: {
OK: function() {
$( this ).dialog( "close" );
}
}
});
});
document.getElementById("dialog-message").innerHTML = theMessage;
	
	}