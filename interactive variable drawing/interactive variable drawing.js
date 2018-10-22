// interactive variable drawing/ super smash bros select screen
// Edan L'Heureux
// 9/27/18
//
// Extra for Experts:
// - i brought back sweet sweet memories of youyr teenage/mid-adult years"

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

let state;

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

  // background music
  music.setVolume(0.7);
  music.loop();
}

function draw() {
  background(255);
  image(img,0,0,windowWidth, windowHeight);
  imglocation();
}



function imglocation(){

  // used to find dimensions for boxes.
  //rectMode(CORNERS);
  //fill(255, 0, 0);
  //rect( width*0.20, height*0.92, width*0.10, height*0.66);


  //determaning the 1p icon the location of the image and the select sound

  //luigi
  if (mouseX < width*0.20 && mouseX > width*0.05 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,260,300,120,120);
    if (mouseIsPressed){
      state =1;
      music1.play(1.0);
    }
  }

  //mario
  else if (mouseX < width*0.35 && mouseX > width*0.200 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,700,300,120,120);
    if (mouseIsPressed){
      state =2;
      music2.play(1.0);
    }
  }

  //dk
  else if (mouseX < width*0.50 && mouseX > width*0.35 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,1300,300,120,120);
    if (mouseIsPressed){
      state =3;
      music3.play(1.0);
    }
  }

  //link
  else if (mouseX < width*0.65 && mouseX > width*0.50 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,1900,300,120,120);
    if (mouseIsPressed){
      state =4;
      music4.play(1.0);
    }
  }

  //samus
  else if (mouseX < width*0.80 && mouseX > width*0.65 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,2300,300,120,120);
    if (mouseIsPressed){
      state =5;
      music5.play(1.0);
    }
  }

  // capfalcon
  else if (mouseX < width*0.95 && mouseX > width*0.80 && mouseY < height*0.332 && mouseY > height*0.130){
    image(imgB,2800,300,120,120);
    if (mouseIsPressed){
      state =6;
      music6.play(1.0);
    }
  }

  //ness
  else if (mouseX < width*0.20 && mouseX > width*0.05 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,260,600,120,120);
    if (mouseIsPressed){
      state =7;
      music7.play(1.0);
    }
  }

  //yoshi
  else if (mouseX < width*0.35 && mouseX > width*0.20 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,780,600,120,120);
    if (mouseIsPressed){
      state =8;
      music8.play(1.0);
    }
  }

  //kirby
  else if (mouseX < width*0.50 && mouseX > width*0.35 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,1300,600,120,120);
    if (mouseIsPressed){
      state =9;
      music9.play(1.0);
    }
  }

  //fox
  else if (mouseX < width*0.65 && mouseX > width*0.50 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,1750,600,120,120);
    if (mouseIsPressed){
      state =10;
      music10.play(1.0);
    }
  }

  //pikachu
  else if (mouseX < width*0.80 && mouseX > width*0.65 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,2200,600,120,120);
    if (mouseIsPressed){
      state =11;
      music11.play(1.0);
    }
  }

  //jigglypuff
  else if (mouseX < width*0.95 && mouseX > width*0.80 && mouseY < height*0.536 && mouseY > height*0.337){
    image(imgB,2700 ,600,120,120);
    if (mouseIsPressed){
      state =12;
      music12.play(1.0);
    }
  }

  // player 1 spot image
  if (state === 1){
    image(img1,220,1090,520,320);
  }
  if (state === 2){
    image(img2,220,1090,520,320);
  }
  if (state === 3){
    image(img3,220,1090,520,320);
  }
  if (state === 4){
    image(img4,220,1090,520,320);
  }
  if (state === 5){
    image(img5,220,1090,520,320);
  }
  if (state === 6){
    image(img6,220,1090,520,320);
  }
  if (state === 7){
    image(img7,220,1090,520,320);
  }
  if (state === 8){
    image(img8,220,1090,520,320);
  }
  if (state === 9){
    image(img9,220,1090,520,320);
  }
  if (state === 10){
    image(img10,220,1090,520,320);
  }
  if (state === 11){
    image(img11,220,1090,520,320);
  }
  if (state === 12){
    image(img12,220,1090,520,320);
  }
}
