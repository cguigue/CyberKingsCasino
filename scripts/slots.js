// JavaScript Document

//Global Variables
var playerBet = document.getElementById("#bet");
var slotType = new Array(19);
var currentType = 0;
var winning = 0;
var imageAlt = new Array("cherries", "banana", "star", "heritage", "seven", "cherries", "banana", "bar", "cherries",
                         "star", "cherries", "banana", "star", "cherries", "cslogo", "banana", "seven", "cherries");
var myMoney = $("#bankroll").html()

//Loop my images for each div.	
function slot_1()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
	
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
//Else, increment the number
	else
	    document.getElementById("image1").src = slotType[currentType].src;
		++currentType;
} // slot_1

function slot_2()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image2").src = slotType[currentType].src;
		++currentType;
} // slot_2

function slot_3()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image3").src = slotType[currentType].src;
		++currentType;
} // slot_3

function slot_4()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image4").src = slotType[currentType].src;
		++currentType;
} // slot_4

function slot_5()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image5").src = slotType[currentType].src;
		++currentType;
} // slot_5

function slot_6()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image6").src = slotType[currentType].src;
		++currentType;
} // slot_6

function slot_7()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image7").src = slotType[currentType].src;
		++currentType;
} // slot_7

function slot_8()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
		
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image8").src = slotType[currentType].src;
		++currentType;
} // slot_8

function slot_9()
{
	for (i = 0; i < slotType.length; ++i) {
	slotType[i] = new Image();
	slotType[i].src = "images/slot/slotType" + i + ".png";
	//slotType[i].attr("alt", imageAlt[i]);
} // for loop

//If my image is at the last image, change back to my first image
	if (currentType == 19)
		currentType = 0;
	else
	    document.getElementById("image9").src = slotType[currentType].src;
		++currentType;
} // slot_9

//Start "spinning" each div.
function start() {
	slot_1();
	slot_2();
	slot_3();
	slot_4();
	slot_5();
	slot_6();
	slot_7();
	slot_8();
	slot_9();
	
} // start()

function calculate_bet() {
	if ($("#image1").attr("image") == $("#image4").attr("alt") && $("#image1").attr("alt") == $("#image7").attr("alt")) {
	   if ($("#image1").attr("alt") == "cherries") {
	      winning += playerBet * 1;
		  myMoney += playerBet;
	   }
	   else if ($("#image1").attr("alt") == "banana") {
		  winning += playerBet * 2;
		  myMoney += playerBet;   
	   }
	   else if ($("#image1").attr("alt") == "star") {
		  winning += playerBet * 3;
		  myMoney += playerBet;   
	   }
	   else if ($("#image1").attr("alt") == "seven") {
		  winning += playerBet * 4;
		  myMoney += playerBet;   
	   }
	   else if ($("#image1").attr("alt") == "bar") {
		   winning += playerBet * 5;
		   myMoney += playerBet;
	   }
	   else if ($("#image1").attr("alt") == "heritage") {
		  winning += playerBet * 6;
		  myMoney += playerBet; 
	   }
	   else if ($("#image1").attr("alt") == "cslogo") {
		  winning += playerBet * 7;
		  myMoney += playerBet; 
	   }
	   else
	      myMoney -= playerBet;
	}
	
	if ($("#image1").attr("alt") == $("#image5").attr("alt") && $("image1").attr("alt") == $("image9").attr("alt")) {
	  if ($("#image1").attr("alt") == "cherries") {
	      winning += playerBet * 1;
		  myMoney += playerBet;
	   }
	   else if ($("#image1").attr("alt") == "banana") {
		  winning += playerBet * 2;
		  myMoney += playerBet;   
	   }
	   else if ($("#image1").attr("alt") == "star") {
		  winning += playerBet * 3;
		  myMoney += playerBet;   
	   }
	   else if ($("#image1").attr("alt") == "seven") {
		  winning += playerBet * 4;
		  myMoney += playerBet;   
	   }
	   else if($("#image1").attr("alt") == "bar") {
		   winning += playerBet *5;
		   myMoney += playerBet;
	   }
	   else if ($("#image1").attr("alt") == "heritage") {
		  winning += playerBet * 6;
		  myMoney += playerBet; 
	   }
	   else if ($("#image1").attr("alt") == "cslogo") {
		  winning += playerBet * 7;
		  myMoney += playerBet; 
	   }
	   else 
	      myMoney -= playerBet;
	}
	
	if ($("#image2").attr("alt") == $("#image5").attr("alt") && $("#image2").attr("alt") == $("#image8").attr("alt")) {
	  if ($("#image2").attr("alt") == "cherries") {
	      winning += playerBet * 1;
		  myMoney += playerBet;
	   }
	   else if ($("#image2").attr("alt") == "banana") {
		  winning += playerBet * 2;
		  myMoney += playerBet;   
	   }
	   else if ($("#image2").attr("alt") == "star") {
		  winning += playerBet * 3;
		  myMoney += playerBet;   
	   }
	   else if ($("#image2").attr("alt") == "seven") {
		  winning += playerBet * 4;
		  myMoney += playerBet;   
	   }
	   else if ($("#image2").attr("alt") == "bar") {
		  winning += playerBet * 5;
		  myMoney += playerBet; 
	   }
	   else if ($("#image2").attr("alt") == "heritage") {
		  winning += playerBet * 6;
		  myMoney += playerBet; 
	   }
	   else if ($("#image2").attr("alt") == "cslogo") {
		  winning += playerBet * 7;
		  myMoney += playerBet; 
	   }
	   else
	      myMoney -= playerBet;	
	}
	
	if ($("#image3").attr("alt") == $("#slot6").attr("alt") && $("#slot3").attr("alt") == $("#slot9").attr("alt")) {
	  if ($("#image3").attr("alt") == "cherries") {
	      winning += playerBet * 1;
		  myMoney += playerBet;
	   }
	   else if ($("#image3").attr("alt") == "banana") {
		  winning += playerBet * 2;
		  myMoney += playerBet;   
	   }
	   else if ($("#image3").attr("alt") == "star") {
		  winning += playerBet * 3;
		  myMoney += playerBet;   
	   }
	   else if ($("#image3").attr("alt") == "seven") {

		  winning += playerBet * 4;
		  myMoney += playerBet;   
	   }
	   else if ($("#image3").attr("alt") == "bar") {
		  winning += playerBet * 5;
		  myMoney += playerBet;
	   }
	   else if ($("#image3").attr("alt") == "heritage") {
		  winning += playerBet * 6;
		  myMoney += playerBet; 
	   }
	   else if ($("#image3").attr("alt") == "cslogo") {
		  winning += playerBet * 7;
		  myMoney += playerBet; 
	   }
	   else
	      myMoney -= playerBet;	
	}
	
	if ($("#image3").attr("alt") == $("#image5").attr("alt") && $("#image3").attr("alt") == $("#image7").attr("alt")) {
		if ($("#image3").attr("alt") == "cherries") {
	      winning += playerBet * 1;
		  myMoney += playerBet;
	   }
	   else if ($("#image3").attr("alt") == "banana") {
		  winning += playerBet * 2;
		  myMoney += playerBet;   
	   }
	   else if ($("#image3").attr("alt") == "star") {
		  winning += playerBet * 3;
		  myMoney += playerBet;   
	   }
	   else if ($("#image3").attr("alt") == "seven") {
		  winning += playerBet * 4;
		  myMoney += playerBet;  
	   }
	   else if ($("#image3").attr("alt") == "") {
		   winning += playerBet * 5;
		   myMoney += playerBet;
	   }
	   else if ($("#image3").attr("alt") == "heritage") {
		  winning += playerBet * 6;
		  myMoney += playerBet; 
	   }
	   else if ($("#image3").attr("alt") == "cslogo") {
		  winning += playerBet * 7;
		  myMoney += playerBet; 
	   }
	   else
	      myMoney -= playerBet;
	}
	
} // calculate_bet()

//Start spinning.
function startSpinning() {
	window.setInterval('start()', 1000);
	
}

//Stop spinning.
function stopSpinning() {
	window.clearTimeout('startSpinning()', 3000);
	
} // stopSpinning()

function leavePage() {
	location.href = "pickGame.html";
} // leavePage()
