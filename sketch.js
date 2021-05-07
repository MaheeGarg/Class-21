var tina;

function setup() {
  createCanvas(400,400);
 tina= createSprite(200,70,20,20);
}

function draw() {
  background("black"); 

  if(keyDown("RIGHT")){
 
   tina.velocityX = 1;
 } 
 if(keyDown("LEFT")){
  tina.velocityX = -1;
} 
if(keyDown("UP")){
  tina.velocityY = -1;
} 
if(keyDown("DOWN")){
  tina.velocityY = 1;
} 
  drawSprites();
}