
const Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var gameState="onSling"
function preload(){

}

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
/* block1=new Block()
  block2=new Block()
  block3=new Block()
  block4=new Block()
  block5=new Block()
  block6=new Block()
  block7=new Block()
  block8=new Block()
  block9=new Block()
  block10=new Block()
  block11=new Block()
  block12=new Block()
  block13=new Block()
  block14=new Block()
  block15=new Block()
  block16=new Block()
*/
ground=new Ground(200,200,50,20)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  ground.display();
  

}