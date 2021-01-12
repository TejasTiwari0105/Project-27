const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof, rope1, rope2, rope3, rope4, rope5;
var engine, world;

function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	//Create the Bodies Here.
	bobDiameter = 40;
	startx = width/2;
	starty= height/4 +500;
	bob1 = new BobbyBoy(startx - bobDiameter*2, starty, bobDiameter);
	bob2 = new BobbyBoy(startx - bobDiameter, starty, bobDiameter);
	bob3 = new BobbyBoy(startx, starty, bobDiameter);
	bob4 = new BobbyBoy(startx + bobDiameter*2, starty, bobDiameter);
	bob5 = new BobbyBoy(startx + bobDiameter, starty, bobDiameter);

	roof = new RoofBoy(width/2, height/4, width/3, 20);

	rope1 = new RopeBoy(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new RopeBoy(bob2.body, roof.body, -bobDiameter, 0);
	rope3 = new RopeBoy(bob3.body, roof.body, 0, 0);
	rope4 = new RopeBoy(bob4.body, roof.body, +bobDiameter*2, 0);
	rope5 = new RopeBoy(bob5.body, roof.body, +bobDiameter, 0);
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(255);  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}
