var fixedRect, movingRect;
var gameobject1 , gameobject2  , gameobject3 , gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100, 300, 50, 50);
  gameobject2 = createSprite(100 , 400 , 50, 50);
  gameobject3 = createSprite(300 , 400 , 50, 50);
  gameobject4 = createSprite(500 , 400 , 50, 50);
  movingRect.velocityX = -5;
  gameobject1.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(gameobject1 , movingRect);
  
  drawSprites();
}
