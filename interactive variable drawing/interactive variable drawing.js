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
  createCanvas(1700, 800);
  image(img,0,0,windowWidth, windowHeight);
  // background music
  music.setVolume(0.4);
  music.loop();
}

function draw() {

}



function imglocation(){
  // luigi
  if (mouseX < width*0.200 && mouseX > width*0.07 && mouseY < height*0.40 && mouseY > height*0.255){
    image(imgB,119,315,322,300);
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