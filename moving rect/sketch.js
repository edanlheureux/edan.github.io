// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectwidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx =5;
  rectwidth = 50;
}

function draw() {
  background(5, 99, 205);

//move rectangle
x += dx;

// wall bounce
if (x > width - rectwidth || x < 0){
  dx = dx * -1
}




  // display
  fill(200, 50, 0)
rect(x,400,50,50,);

}
