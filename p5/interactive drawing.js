// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
    createCanvas(400, 400);
    background(255);
    var value = 0;

}

function draw() {
  if (mouseIsPressed && keyIsPressed && key === "r"){
    fill(255,0,0)
    rect (mouseX, mouseY, 50, 50)
  }
  if(mouseIsPressed && keyIsPressed && key === "e"){
    fill(100,2,150)
    ellipse(mouseX,mouseY,50,50)
  }

function keyTyped(){
  if (key === "w") {
    background(255);
}
function keyTyped(){
  if(key === "b") {
    background(0);
  }

}
