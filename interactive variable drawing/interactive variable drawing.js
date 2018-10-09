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
  /// images for charecters
  img1 = loadImage("assets/luigi.PNG");
  img2 = loadImage("assets/mario.PNG");
  img3 = loadImage("assets/dk.PNG");
  img4 = loadImage("assets/link.PNG");
  img5 = loadImage("assets/samus.PNG");
  img6 = loadImage("assets/cfalcon.PNG");
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
  music9 = loadSound("assets/kriby.MP3");
  music10 = loadSound("assets/fox.MP3");
  music11 = loadSound("assets/pika.MP3");
  music12 = loadSound("assets/jiggly.MP3");
}


function setup() {
  createCanvas(1700, 800);
  image(img,0,0,windowWidth, windowHeight);

  music.setVolume(1.0);
  music.loop();

  music.setvolume()
}

function draw() {
  box1 = {
    x: 200,
    y: 300,
    image: img1
  };
}
