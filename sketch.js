var hulk,hulkimg;
var ironMan,ironManimg;
var thor,thorImg;
var spiderMan,spiderManimg;
var background1,backgroundimg;
var bullet;
var themeTune;
var gameState="wait";
var player;




function preload(){
	captainAmericastill=loadImage("avengers/captainamerica.png")
	captainAmerica1img=loadImage("avengers/captainAmericarunningright.gif")

	bg= loadImage("space/spacebg.gif");


	thanosstill=loadImage("avengers/thanos.gif")

}


function setup(){
	createCanvas(windowWidth,windowHeight)
	

	background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
background1.addImage(bg)
background1.visible=false
background1.scale=2.4


	captainAmerica=createSprite(100,150)
	captainAmerica.addImage(captainAmericastill)
	captainAmerica.scale=0.5
		
	button1=createButton("Pause")
	button1.position(1750,100) 

	button=createButton("start")
	button.position(100,100)


	player=createSprite(100,200)
    player.visible=false

}




function draw(){
	

if (gameState==="wait"){

	captainAmerica.visible=false

background("cyan");
text("AVENGERS IN ACTION", windowWidth/2-50,windowHeight/2);

button.mousePressed(()=>{

	gameState="start";
	//background(background1);

	background1.visible=true
	button.hide();
	captainAmerica.visible=true

})
 
if (gameState==="start"){
//background(bg)
}


}
drawSprites()



/*
if(mousePressedOver(thor)){
	thor.addImage(thorImg);
	
}
else {thor.addImage(thorimgstil);
	
}

if(mousePressedOver(hulk)){
	hulk.addImage(hulkimg)
	
	}
else{hulk.addImage(hulkimgstill)


}*/


/*if (gameState==="start"){
	
}*/



	

}
