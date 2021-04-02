var cat , catImg1 , catImg2 , catImg3 , catImg4;
var mouse , mouseImg1 , mouseImg2 , mouseImg3 , mouseImg4;
var garden , gardenImage;

function preload() {
    //load the images here

catImg1.loadImage(cat1.png);
catImg2.loadImage(cat2.png);
catImg3.loadImage(cat3.png);
catImg4.loadImage(cat4.png);

mouseImg1.loadImage(mouse1.png);
mouseImg2.loadImage(mouse2.png);
mouseImg3.loadImage(mouse3.png);
mouseImg4.loadImage(mouse4.png);

gardenImage.loadImage(garden.png);

}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(600,400,100,80);
   
    mouse = createSprite(600,200,100,80);
    mouse.addAnimation(mouseImg1,mouseImg2,mouseImg3,mouseImg4);

    garden=createSprite(1000,800,1000,1000);
    garden.Addanimation(gardenImage);
    
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    text(mouseX + mouseY,10,45)
   if( cat.x - mouse.x < (cat.width - mouse.width)/2);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){ 
    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");


    }

  //For moving and changing animation write code here
cat.addAnimation("catLastImage",catImg3);
cat.changeAnimation("catLastImage");

}

