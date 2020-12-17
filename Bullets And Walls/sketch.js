var car,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(23,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,30,10);
  bullet.shapeColor= "black";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall2=createSprite(1200,400,thickness,height/2);
  wall2.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x + bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

function draw() {
  background= "white"; 
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  }
  if(damage<10){
  wall.shapeColor=color(0,255,0);
  }
  if(damage>10){
  wall.shapeColor=color(255,0,0);
  }
    if(damage<10){
    wall2.shapeColor=color(0,255,0);
    }
    if(damage>10){
    wall2.shapeColor=color(255,0,0);
    }
  drawSprites();
}