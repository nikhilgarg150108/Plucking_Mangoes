const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree, treeImg;
var boy, boyImg;
var stone1;
var string1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	treeImg = loadImage("images/tree.png");
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(500, 625, 1200, 20);
	stone1 = new Stone(100, 460, 23);
	string1 = new String(stone1.body, {x:100, y:465});

	mango1 = new Mango(600, 290, 35);
	mango2 = new Mango(855, 325, 35);
	mango3 = new Mango(670, 260, 35);
	mango4 = new Mango(730, 200, 35);
	mango5 = new Mango(710, 320, 35);
	mango6 = new Mango(780, 250, 35);
	mango7 = new Mango(825, 170, 35);
	mango8 = new Mango(880, 260, 35);
	mango9 = new Mango(940, 220, 35);
	mango10 = new Mango(980, 305, 35);

	tree = createSprite(775, 368);
	tree.addImage(treeImg);
	tree.scale = 0.42;

	boy = createSprite(160, 550);
	boy.addImage(boyImg);
	boy.scale = 0.125;

	Engine.run(engine); 
}


function draw() {
	rectMode(CENTER);
	background(255);
	Engine.update(engine);

	detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
	detectCollision(stone1, mango6);
	detectCollision(stone1, mango7);
	detectCollision(stone1, mango8);
	detectCollision(stone1, mango9);
	detectCollision(stone1, mango10);
	
	drawSprites();
	ground1.display();
	stone1.display();
	string1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	string1.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body,setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body, {x:100, y:465});
		boy.attach(stone1.body);
	}
}