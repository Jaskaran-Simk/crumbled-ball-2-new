const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var dustbin1;
var paper1;
var world;
var dustbin1,dustbin2,dustbin3;
var bin1;


function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;

paper1 = new paper(100,200,30);
ground1 = new ground(230,388,2000,30);

dustbin1 = new dustbin(1090,340,20,200);




	
}

function draw() {

 background("grey");
 Engine.update(engine);

 paper1.display();
 dustbin1.display();
 
  
  ground1.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-155});
		
	}
}
