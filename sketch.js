var climber;
var ClimbSpeed = -0.25;
var summit;
var ice;
var counter = 0;

function setup() {
  createCanvas(800,500);
  var xStart = random(0,800);
  climber = createSprite(xStart,485, 25, 25);
  var xGoal = random(0,800);
}

function draw() {
  background(30,30,30);
  fill('rgba(0,255,0, 0.25)');
  summit = rect(400, 5, 55, 55);

  if(keyWentDown("w") || keyWentDown(UP_ARROW)){climber.velocity.y += ClimbSpeed; counter = counter + 1; ice = new Pain();}
  if(keyWentDown("s") || keyWentDown(DOWN_ARROW)){climber.velocity.y -= ClimbSpeed; counter = counter + 1; ice = new Pain();}
  if(keyWentDown("a") || keyWentDown(LEFT_ARROW)){climber.velocity.x += ClimbSpeed; counter = counter + 1; ice = new Pain();}
  if(keyWentDown("d") || keyWentDown(RIGHT_ARROW)){climber.velocity.x -= ClimbSpeed; counter = counter + 1; ice = new Pain();}
 
  if (climber.velocity.y >= 1.5){climber.velocity.y = 0;}
  if (climber.velocity.y <= -1.5){climber.velocity.y = 0;}
  if (climber.velocity.x >= 1.5){climber.velocity.x = 0;}
  if (climber.velocity.x <= -1.5){climber.velocity.x = 0;}
  checkWon();

  drawSprites();
}


function checkWon(){
	if (counter >= 10){
		console.log("you lose!");
	}
	if (climber.position.y < 60 & climber.position.x > 410 & climber.position.x < 440){
		console.log("you win!");
	}
}

function Pain() {
	this.width = random(10,200);
	this.height = random(10,200);
	this.x = random(0,800);
	this.y = random(0,400);
	this.sprite = createSprite(this.x, this.y, this.width, this.height);
}