// JavaScript Document

//FIRST FLAG - Animation of the first flag
var flag1Array = new Array(8);
var curFlag1 = 0;
for (var i = 0; i < 8; ++i)
{
	flag1Array[i] = new Image();
	flag1Array[i].src = "images/flag" + i + ".png";
	}//for
	
function flag1Anim()
{
	if(curFlag1 == 7)
		curFlag1 = 0;
	else
		 ++curFlag1;
	document.getElementById("firstFlag").src = flag1Array[curFlag1].src;
	}//flag1Anim()


//SECOND FLAG - Animation of the second flag
var flag2Array = new Array(8);
var curFlag2 = 4;
for(var i = 0; i < 8; ++i)
{
	flag2Array[i] = new Image();
	flag2Array[i].src = "images/flag" + i + ".png";
	}//for
function flag2Anim()
{	
	if(curFlag2 == 7)
		curFlag2 = 0;
	else
		 ++curFlag2;
	document.getElementById("secondFlag").src = flag2Array[curFlag2].src;
	}//flag2Anim()
	
	
	
	
//FIRST SWORD - Animation of the first dropping sword
var sword1Array = new Array(8);
var curSword1 = 0;
for(var i = 0; i < 8; ++i)
{
	sword1Array[i] = new Image();
	sword1Array[i].src = "images/sword" + i + ".png";
	}//for
var topposition1 = -400;//TOP POSITION 1

function sword1Anim()
{
	var sword1 = document.getElementById("firstSword");
	sword1.style.top = topposition1 + "px";
	sword1.style.visibility = "visible";
	if(topposition1 <= 150)
	topposition1 += 5;
	
	
	if(curSword1 == 7)
		curSword1 = 0;
	else
		++curSword1;
	document.getElementById("firstSword").src = sword1Array[curSword1].src;
	}//sword1Anim()
	
	
//SECOND SWORD - Animation of the second dropping sword
var sword2Array = new Array(8);
var curSword2 = 0;
for(var i = 0; i < 8; ++i)
{
	sword2Array[i] = new Image();
	sword2Array[i].src = "images/sword" + i + ".png";
	}//for
var topposition2 = -400;//TOP POSITION 2
	

function sword2Anim()
{
	var sword2 = document.getElementById("secondSword");
	sword2.style.top = topposition2 + "px";
	sword2.style.visibility = "visible";
	if(topposition2 <= 150)
	topposition2 += 5;
	
	if(curSword2 == 0)
		curSword2 = 7;
	else
		curSword2 -= 1;
	document.getElementById("secondSword").src = sword2Array[curSword2].src;
	}//sword2Anim()
	
//TITLE IMAGE - Animation of the Title image, coming from the left
var titleSwordImg = new Image();
	titleSwordImg.src = "images/titleSword.png";
var curTitle;
var titleleftposition = -1000;
function titleSwordAnim()
{
	var titleS = document.getElementById("titleSword");
	titleS.style.left = titleleftposition + "px";
	titleS.style.visibility = "visible";
	if (titleleftposition <=300)
	titleleftposition += 10;
	}
	
	


//CANVAS ELEMENT - (Attempted) Animation of a trumpet blasting "ENTER HERE", could not get it to run properly and where I wanted it to.
var enteranim = new Array(5);
var curenter = 0;	
for(var i = 0; i < 5; ++i){

 enteranim[i] = new Image();
 enteranim[i].src = "images/enter" + i +".png";
}

function initialize() 
{ 	pressbutton = document.getElementById("enterbutton");
	pressbutton.style.display = "inline";
	mycanvas = document.getElementById("myCanvas");
	context = mycanvas.getContext("2d");
	setInterval(drawEnter,80);
}
function drawEnter()
{
for (var c = 0; c<6; ++c)
	{	
	context.clearRect(0,0,239,64);
	context.drawImage(enteranim[curenter] ,0,0);
	++curenter;
	if (curenter==5)
		curenter=0;	
	}
}