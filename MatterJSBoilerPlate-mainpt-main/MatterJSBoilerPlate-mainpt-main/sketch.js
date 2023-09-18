
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1;
var block2;
var block3;
var solo;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
 var plane_options = {
	isStatic : false
 }
 var top_options = {
	isStatic : true
 }
 var ok_options = {
	restitution:1
 }


block1= Bodies.circle(200,70,70, ok_options); World.add(world, block1);
block2 = Bodies.rectangle(110,50,100,100,plane_options); World.add(world, block2);
block3 = Bodies.rectangle(350,50,100,100, plane_options); World.add(world, block3);
solo = Bodies.rectangle(390,700,850,50, top_options); World.add(world, solo);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	ellipseMode(CENTER);
  background("yellow");
  
	fill("red")
	ellipse(block1.position.x,block1.position.y,70)
	rect(block2.position.x,block2.position.y,100,100)
	rect(block3.position.x,block3.position.y,100,100)
	rect(solo.position.x,solo.position.y,850,50)

	Engine.update(engine)

  drawSprites();
 
}



