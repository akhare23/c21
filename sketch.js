var fixedRect, movingRect;
var obj2, obj3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 0, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=2;
  movingRect = createSprite(200,400,80,50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY=-2;

  obj2 = createSprite(500,200,20,20);
  obj3 = createSprite(50,200,20,20);
}

function draw() {
  background(0); 
  
  obj2.x = mouseX;
  obj2.y = mouseY;

  

  bounceOff(fixedRect, movingRect);
  if(isTouching(obj2,obj3)){
    obj2.shapeColor = "red";
    obj3.shapeColor = "red";
  }
  else{
    obj2.shapeColor = "gray";
    obj3.shapeColor = "gray";
  }


  

  drawSprites();
}

