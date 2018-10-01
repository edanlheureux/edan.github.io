// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music;



function preload(){
  music = loadSound("assets/erika WW2 German marching Song.mp3");

}




function setup() {
  createCanvas(windowWidth, windowHeight);
  music.setVolume(1.0);
  music.loop();
}

function draw() {

}
