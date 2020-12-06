
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobDiameter;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(500,500,50);
	bobObject2 = new Bob(550,500,50);
	bobObject3 = new Bob(600,500,50);
	bobObject4 = new Bob(650,500,50);
	bobObject5 = new Bob(700,500,50);
       
	roofObject = new Roof(605,250,270,25)

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0);



	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}



