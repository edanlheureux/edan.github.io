// zoom image
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let wah;
let scaler;

function preload(){
  wah = loadImage("assets/waluigi.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler  = 0.5
}

function draw() {
  background(0,0,0);
  image(wah, mouseX, mouseY, wah.width * scaler, wah.height * scaler);

}

function mouseWheel(event){
  if (event.delta > 0){
    scaler *= 1.1;
  }
  else {
    scaler *= 0.9;
  }
  console.log
}
