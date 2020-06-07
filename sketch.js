var fixedRect,movingRect;
var gameObject1,gameObject2;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400, 100, 50, 50);

  gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";
gameObject1.velocityX = 5;

  gameObject2 = createSprite(700,100,50,50);
gameObject2.shapeColor = "green";
gameObject2.velocityX = -5;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

if(isTouching(movingRect,gameObject1)){
	movingRect.shapeColor = "red";
	gameObject1.shapeColor = "red";
}else{
	movingRect.shapeColor = "green";
	gameObject1.shapeColor = "green";
}

bounceOff(gameObject1,gameObject2);

  drawSprites();
}

