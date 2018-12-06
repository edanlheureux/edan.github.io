// Asteroid Impact Demo
// Edan L'Heureux


// list of all music and all images.
let asteroids = [];
let aster1;
let aster1b;
let aster2;
let aster2b;
let aster3;
let aster3b;
let music;
let hplost;
let gameover;
let gunshot;
let asterrand;

function preload(){
  music =loadSound("assets/backgroundmusic.mp3");
  aster1 =loadImage("assets/Asteroid-1-Large.png");
  aster1b =loadImage("assets/Asteroid-1-Small.png");
  aster2 =loadImage("assets/Asteroid-2-Large.png");
  aster2b =loadImage("assets/Asteroid-2-Small.png");
  aster3 = loadImage("assets/Asteroid-3-Large.png");
  aster3b = loadImage("assets/Asteroid-3-Small.png");
  hplost = loadSound("assets/Hp-lost.mp3");
  gameover = loadSound("assets/GameOver.mp3");
  gunshot = loadSound("assets/gunshot.mp3");
}



function setup() {
  createCanvas(1600, 790);
  fill(255);
  noStroke();
  music.setVolume(0.9);
  music.loop();
  asterrand =[aster1, aster2, aster3];
}

function draw() {
  let t = frameCount / 60; // update time

  // create a random number of Asteroids each frame
  for (let i = 0.4; i < random(0.41); i++) {
    asteroids.push(new Asteroid()); // append Asteroids object
  }

  /////////////////////////////////////////////////////////////////
  // loops through and draws the asteroids
  for (let aster of asteroids) {
    aster.update(t);
    aster.display();
  }
}

// asteroid class
function Asteroid() {
  // initialize coordinates
  this.posX = random(0, width);
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(40, 40);

  // chosen so the Asteroids are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.5; // angular speed
    let angle = w * time + this.initialangle;
    this.posY += pow(this.size, 0.01);

    // delete Asteroids if past end of screen
    if (this.posY > height) {
      let index = asteroids.indexOf(this);
      asteroids.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function keyPressed(){
  if(key === " "){
    gunshot.setVolume(0.65);
    gunshot.play();
  }
}
