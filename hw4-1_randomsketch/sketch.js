function setup() {
  createCanvas(500,500)
  fill(0,255)
  noStroke()
  frameRate(22) //framerate of 22
}

function draw() {
   var x = random(height)
   var y = random(width)
   var z = random(0, 255) 
   var d = random(0, 80)
    
    background(mouseY); //background is dependent on Y position of Mouse grey to black
    fill(z, 0, 255) //fill for rectangles creates a random purple or blue depending on the random amount of red
    rect(x, y, d, d) //random sized square appears in random location every frame
    
}