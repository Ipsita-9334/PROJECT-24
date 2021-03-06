var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeft, boxRight, boxBottom;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	 box1Sprite = createSprite(width/2, height- 40, 200, 20);
	 box1Sprite.shapeColor = "red"

	 box2Sprite = createSprite(width/2,height- 40, 100, 10);
	 box2Sprite.shapeColor = "red"

	 box3Sprite = createSprite(width/2,height- 40, 100, 10);
	 box3Sprite.shapeColor = "red"

	 packageSprite=createSprite(width/2, 80, 10,10);
	 packageSprite.addImage(packageIMG)
	 packageSprite.scale=0.2

	 helicopterSprite=createSprite(width/2, 200, 10,10);
	 helicopterSprite.addImage(helicopterIMG)
	 helicopterSprite.scale=0.6

	 groundSprite=createSprite(width/2, height-35, width,10);
	 groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	 World.add(world, packageBody);

	 boxBottom = new Box(400, 650, 200, 10);
	 boxRight = new Box(300, 620, 20, 100);
	 boxLeft = new Box(500, 620, 20, 100);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxBottom.display();
  boxRight.display();
  boxLeft.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false)

    
  }
}