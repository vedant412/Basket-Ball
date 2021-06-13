
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paper =new Paper(150,10,50,50,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed(){
if (keycode === UP_ARROW){

Matter.Body.applyForce.body,paperObject.body.positon,{x:130,y:140}

}

}