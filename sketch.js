var car;
var carImage;

var greenImage;
var yellowImage;
var redImage;

var wall;
var wallImage;

var speed;
var weight;

var deformation;

function preload(){

  carImage=loadImage("car.png");

 greenImage=loadImage("green.png");
 
 yellowImage=loadImage("yellow.png");

 redImage=loadImage("red.png");

 wallImage=loadImage("ewall.png");
}

function setup() {
  createCanvas(2000,2000);

speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  wall=createSprite(800,230,30,400);
  wall.addImage("wa",wallImage);
  wall.scale=2;
  
  car=createSprite(10,200,30,30);
  car.addImage("ca",carImage);
  car.addImage("ga",greenImage);
  car.addImage("ra",redImage);
  car.addImage("ya",yellowImage);
   
  car.shapeColor="white";
  car.velocityX=speed;
 
  wall.depth=car.depth;
  wall.depth=wall.depth+1;
}

function draw() {
  background("black");  

 if(wall.x-car.x < wall.width/2+car.width/2){
car.velocityX=0;

deformation=0.5*weight*speed*speed/22500
if(deformation<100){
  car.changeImage("ga",greenImage);


  textSize(30);
  fill("red");  
  text("DEFORMATION LESS THAN 100",100,200)
}

if(deformation>100 && deformation<180){
  car.changeImage("ya",yellowImage);
  textSize(30);
  fill("red");  
  text("DEFORMATION MORE THAN 100",100,200)
}



if(deformation>180){
  car.changeImage("ra",redImage);
  textSize(30);
  fill("red");  
  text("DEFORMATION MORE THAN 180",100,200)
}

 } 


  drawSprites();
}