var x = 200; //center circle dimensions
var y = 200;
var z = 100;

var xa = 100 //random moving shape dimensions
var ya = 100
var dir = 1
var speed = 10



function setup() {
  createCanvas(500, 500);
  frameRate(28)
}


function draw() {
  background(249, 250, 87);
  var g = random(255);
  var diam =  random(width)
  var diam2 = random(height)
  if ((mouseX > x) && (mouseX < x + z) && (mouseY > y) && (mouseY < y + z) && mouseIsPressed) { //center square
   // fill(252, 108, 133);
    fill(0, g, g)
    //text("WATERMELON")
  } else {
    fill(34, 188, 49);
  }
  rect(x, y, z, z);
  
  ellipse(xa, height/2, diam, diam2)
    
  
  xa += dir * speed
  if (xa > width - 25 || xa < 25)
    dir = -dir
}

