const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var gameState="start";
var car,carimg;
var car1,car1img,car2,car2img,car3,car3img,car4,car4img;
var track;
var tree,treeimg;
var input1,input2,button;
var backimg,backimg2,roadimg;
var background1,name;


function preload(){
  backimg=loadImage("back.png")
  roadimg=loadImage("track.jpg")
  carimg=loadImage("car0.png")
  treeimg=loadImage("images.png")
  car1img
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create()
  world=engine.world
  background1=createSprite(200,200,50,50)
  
  background1.addImage(backimg)
  background1.scale=4;
    input1=createInput("name")
  input1.position(500,330)
  input2=input1.value()
  button=createButton('play')
 button.position(570,350)

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  button.mousePressed(()=>{
    gameState="play"
    input1.hide()
    button.hide()
    background1.visible=false;
    track=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    track.addImage(roadimg)
    track.scale=3;
   car=createSprite(430,700,20,20)
   car.addImage(carimg)
   car.scale=0.5;
   if(keyDown("up")){
     car.y=car.y-10;
   }
  })
  drawSprites();
  if(gameState=="start"){
    textSize(24)
    stroke("black")
    fill("black")
  text("Car Racing Game",500,100)
  }
}
