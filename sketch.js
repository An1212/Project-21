const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var lhs, rhs;
var ground;
var engine, world;
var radius= 40;

function setup() {
	createCanvas(1600, 800);
    
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

      var ball_options= {
		  isStatic:false,
		  restituation: 0.3,
		  friction: 0,
		  density: 1.2
	  }

	  ball =Bodies.circle(200,100,radius/2,ball_options)
	  World.add(world,ball)
	

	//Create the Bodies Here.
    ground= new Ground(width/2,670,width,20)
    lhs= new Ground(1100,600,20,120)
	rhs=  new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius)

   ground.display()
   lhs.display();
   rhs.display(); 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


