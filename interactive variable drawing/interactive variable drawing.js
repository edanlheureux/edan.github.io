// interactive variable drawing/ super smash bros select screen
// Edan L'Heureux
// 9/27/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// variables
let music;
let img;
let box1 , box2;
let box3 , box4;

let ch1 , ch2;


function preload(){
  img = loadImage("assets/Capture.PNG");
  music = loadSound("assets/supersmash.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img,0,0,windowWidth, windowHeight);

  music.setVolume(1.0);
  music.loop();
}

function draw() {

}
