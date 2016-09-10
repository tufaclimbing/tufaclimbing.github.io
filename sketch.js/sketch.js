function setup() {
  createCanvas(1000, 1000)
  background(200)
}

function draw() {

  line(500, 600, 500, 750) //stick body main
  line(500, 675, 450, 625) //left arm
  line(500, 675, 550, 625) //right arm
  line(500, 750, 450, 800) //left arm
  line(500, 750, 550, 800) //right arm

  var g = color(34, 139, 34) //set to forest green
  fill(g)
  noStroke()
  rect(485, 350, 30, 30) //green stem up top, behind orange circle

  var p = color(255, 118, 25) // set to pumpkin orange
  fill(p)
  noStroke()
  ellipse(500, 500, 250, 250) //round head

  var c = color(0) // setting var color (c) to black
  fill(c)
  noStroke()
  ellipse(450, 460, 60, 40) //left eye
  ellipse(550, 460, 60, 40) //right eye

  triangle(500, 500, 480, 540, 520, 540) // nose

  arc(500, 560, 80, 60, 0, PI)
}
