// interactive variable drawing/ super smash bros select screen
// Edan L'Heureux
// 9/27/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// variables
let music,music1,music2,music3;
let music4,music5,music6,music7;
let music8,music9,music10,music11,music12;

let img,img1,img2,img3;
let img4,img5,img6,img7;
let img8,img9,img10,img11,img12,imgB;

let box1 , box2;
let box3 , box4;
let box5 , box6;
let box7 , box8;
let box9 , box10;
let box11 , box12;

let ch1 , ch2;

let mousepoint;

/// loading the pictures and all the sound
function preload(){
  img = loadImage("assets/Capture.PNG");
  music = loadSound("assets/SuperSmashBros - Copy.mp3");
  imgB = loadImage("assets/button.png");
  /// images for charecters
  img1 = loadImage("assets/luigi.PNG");
  img2 = loadImage("assets/mario.PNG");
  img3 = loadImage("assets/dk.PNG");
  img4 = loadImage("assets/link.PNG");
  img5 = loadImage("assets/samus.PNG");
  img6 = loadImage("assets/cfalcion.PNG");
  img7 = loadImage("assets/ness.PNG");
  img8 = loadImage("assets/yoshi.PNG");
  img9 = loadImage("assets/kirby.PNG");
  img10 = loadImage("assets/fox.PNG");
  img11 = loadImage("assets/pikachu.PNG");
  img12 = loadImage("assets/jiggly.PNG");
  /// sound files for charecters
  music1 = loadSound("assets/luigi.MP3");
  music2 = loadSound("assets/mario.MP3");
  music3 = loadSound("assets/dk.MP3");
  music4 = loadSound("assets/link.MP3");
  music5 = loadSound("assets/samus.MP3");
  music6 = loadSound("assets/capfalcon.MP3");
  music7 = loadSound("assets/ness.MP3");
  music8 = loadSound("assets/yoshi.MP3");
  music9 = loadSound("assets/kirby.MP3");
  music10 = loadSound("assets/fox.MP3");
  music11 = loadSound("assets/pika.MP3");
  music12 = loadSound("assets/jiggly.MP3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img,0,0,windowWidth, windowHeight);
  // background music
  music.setVolume(0.7);
  music.loop();
}

function draw() {
  imglocation();
}



function imglocation(){
  // luigi
  //rectMode(CORNERS);
  //fill(255, 0, 0);
  //rect( width*0.200, height*0.536, width*0.05, height*0.332);
  if (mouseX < width*0.20 && mouseX > width*0.05 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,260,300,120,120);
  }
  //mario
  if (mouseX < width*0.35 && mouseX > width*0.200 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,700,300,120,120);
  }
  //dk
  if (mouseX < width*0.50 && mouseX > width*0.35 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,1300,300,120,120);
  }
  //link
  if (mouseX < width*0.65 && mouseX > width*0.50 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,1900,300,120,120);
  }
  //samus
  if (mouseX < width*0.80 && mouseX > width*0.65 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,2300,300,120,120);
  }
  // capfalcon
  if (mouseX < width*0.95 && mouseX > width*0.80 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,2800,300,120,120);
  }
  //ness
  if (mouseX < width*0.20 && mouseX > width*0.05 && mouseY < height*0.536 && mouseY > height*0.130){
    image(imgB,260,600,120,120);
  }
  //yoshi
  if (mouseX < width*0.35 && mouseX > width*0.20 && mouseY < height*0.536 && mouseY > height*0.130){
    image(imgB,780,600,120,120);
  }
  //kirby
  if (mouseX < width*0.50 && mouseX > width*0.35 && mouseY < height*0.536 && mouseY > height*0.130){
    image(imgB,1300,600,120,120);
  }
  //fox
  if (mouseX < width*0.65 && mouseX > width*0.50 && mouseY < height*0.536 && mouseY > height*0.130){
    image(imgB,1750,600,120,120);
  }
}
// to play sound
function charectersclicked(){

  music1.setVolume(1.0);
  music.play();

  music2.setVolume(1.0);
  music.play();

  music3.setVolume(1.0);
  music.play();

  music4.setVolume(1.0);
  music.play();

  music5.setVolume(1.0);
  music.play();

  music6.setVolume(1.0);
  music.play();

  music7.setVolume(1.0);
  music.play();

  music8.setVolume(1.0);
  music.play();

  music9.setVolume(1.0);
  music.play();

  music10.setVolume(1.0);
  music.play();

  music11.setVolume(1.0);
  music.play();

  music12.setVolume(1.0);
  music.play();
}
