// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let lasttimeswitchcolor;

const redlighttime = 3000;
const greenlighttime = 4000;
const yellowlighttime = 500;


function setup() {
  createCanvas(600, 600);
  state = 1;
  lasttimeswitchcolor = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkforstatechange();
  displaycorrectlight();
}

function checkforstatechange(){
  let ellpsedtime =millis() - lasttimeswitchcolor;
  if (state === 1 && ellpsedtime >= redlighttime) {
    state = 2;
    lasttimeswitchcolor = millis();
  }
  else if (state === 2 && ellpsedtime >= greenlighttime){
    state = 3;
    lasttimeswitchcolor = millis();
  }
  else if (state === 3 && ellpsedtime >= yellowlighttime) {
    state = 1;
    lasttimeswitchcolor = millis();
  }
}


function displaycorrectlight(){
  if (state === 1) {
    dispalayRedlight();
  }
  else if (state === 2) {
    displaygreenlight();
  }
  else if (state === 3) {
    displayyellowlight();
  }
}


function dispalayRedlight(){
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50);
}

function displayyellowlight(){
  fill(255,255,0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function displaygreenlight(){
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}



function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
