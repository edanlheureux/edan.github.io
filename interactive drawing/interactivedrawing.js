// interactive drawing
// Edan L'Heureux
// 9,14,18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let bon;
let x,y;
let dx, dy;
let music
let music2


function preload(){
  bon = loadImage("assets/Ro.png")
  music = loadSound("assets/german.mp3");
  music2 = loadSound("assets/THX(2).mp3")
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - bon.width / 2;
  y = height/2 - bon.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);

  music.setVolume(1.0);
  music.loop();
}

function draw() {
  movebon();
  displaybon();
  if (mouseIsPressed && keyIsPressed) {
    if (key === "r") {
      rect(mouseX, mouseY, 100, 100);
    }
  	if (key === "e") {
      ellipse(mouseX, mouseY, 100, 100);
    }
  }
}

function displaybon(){
  background(40,40,40);
  image(bon, x, y);
}
function movebon(){

  x += dx;
  y += dy;

  if (y + bon.height >= height || y <= 0) {
    dy = dy * -1;
  }
  if (x + bon.width >= width || x <= 0){
    dx = dx * -1;
  }
}
function mouseIsPressed(){
  music2.setVolume(1.0);
  music2.play();
}

//function keyTyped() {
//  if (key === "t") {
  //  background(40,40,40);
//  }
//  else if (key === "b") {
///    background("assets/Thximage.jpg");
//  }
//}
/// couldnt figure out
