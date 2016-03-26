// JavaScript Document
var lastName;
var firstName;
var pCode;
var phoneNum;
var bankRoll;
var lastVisit;



if(!(document.cookie))
{
	window.location.href = "intro.html";	
	}



function getFormInfo()
{

	var cookieString = decodeURIComponent(document.cookie);
	var cookieArray = cookieString.split("; ");
	
	for (i=0; i<cookieArray.length; i++) {
		equalPos = cookieArray[i].search("=");
		cookieValue = cookieArray[i].substring(equalPos+1);
		cookieName = cookieArray[i].substring(0, equalPos);
		switch (cookieName) {
			case "firstName":
				firstName = cookieValue;
				break;
			case "lastName":
				lastName = cookieValue;
				break;
			case "phoneNum":
				phoneNum =  cookieValue;
				break;
			case "pCode":
				pCode = cookieValue;
				break;
			case "bankRoll":
				bankRoll = parseInt(cookieValue);
				break;
			case "lastVisit":
				lastVisit = cookieValue;
				break;
		}// end switch
	}// end for
/*	for(var i = 0; i < cookieArray.length; ++i)
	{
		if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "firstName")
			firstName = cookieArray[0].substring(cookieArray[0].indexOf('=') + 1);

		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "lastName")
			lastName = cookieArray[1].substring(cookieArray[1].indexOf('=') + 1);

		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "phoneNum")
			phoneNum = cookieArray[2].substring(cookieArray[2].indexOf('=') + 1);
	
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "pCode")
			pCode = cookieArray[3].substring(cookieArray[3].indexOf('=') + 1);
		
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "bankRoll")
			bankRoll = parseInt(cookieArray[4].substring(cookieArray[4].indexOf('=') + 1));
				
		else if(cookieArray[i].substring(0, cookieArray[i].indexOf('=')) == "lastVisit")
			lastVisit = cookieArray[5].substring(cookieArray[5].indexOf('=') + 1);
				
		}//FOR LOOP  - takes the cookie array and breaks it into its pieces.*/



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
	//CODE - This code is breaking it into it's pieces and assigning into a string 
			//that has the days and months, and also making the Clock look nicer.
}
function pickGame()
{
	location.href = "pickGame.html"	;
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
//BAKE - Creates the cookies

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
//EAT - Sets the expire date back and "eats" the cookies. This should be set to whenever the
			// player loses all his money, or he hits "CHANGE CREDENTIALS"
	
$(document).ready(function() {
	
    getFormInfo();
	loadPlayer();	
	changePerson();		
	$("#bankroll").change(function() {
			        
    });

});

function loadPlayer() 
{
	$("#phonenumber").html(phoneNum);
	$("#playername").html(firstName + " " + lastName);
	$("#postalcode").html(pCode);
	$("#lastvisit").html(lastVisit);
	$("#bankroll").html(bankRoll);
}
function changePerson()
{
	var notMe = $("#notme").html("Not " + firstName + " " + lastName + "? Change credentials.");
}