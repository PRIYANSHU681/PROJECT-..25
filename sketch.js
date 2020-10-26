
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ball= new paperclass(20,600,20);
		ground = new Ground(width/2, 650, width, 10 )

		dustbin1= new dustbin(1000,650)
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
 ground.display();
 dustbin1.display();
 
 
}

	function keyPressed() {
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})
	}
	}