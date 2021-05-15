var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bgImg;

function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png","images/cat2.png");
    catImg2 = loadAnimation("images/cat3.png","images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png","images/mouse2.png");
    mouseImg2 = loadImage("images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
   cat = createSprite(800,500,50,50);
   cat.addAnimation("cat running",catImg1);
   cat.scale = 0.15;
    
   mouse = createSprite(200,500,20,20);
   mouse.addAnimation("mouse running",mouseImg1);
   mouse.scale = 0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.x = 350;
        cat.addAnimation("cat collided",catImg2);
        cat.changeAnimation("cat collided");
        mouse.addImage("mouse collided",mouseImg3);
        mouse.changeImage("mouse collided");
    }

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here

 if(keyCode === LEFT_ARROW){
    mouse.addImage("mouse teasing",mouseImg2);
    mouse.changeImage("mouse teasing");
    mouse.frameDelay = 25;
    cat.velocityX = -3; 
 }

}
