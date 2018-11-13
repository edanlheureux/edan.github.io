// Grid race
// Edan L'Heureux
// 11/13/18
//

/////////////////////////////////////////////////////
/// all the let functions for socres and the x and ys for the players

let rows = 25;
let cols = 25;
let grid;
let cellsize;
let playX;
let playY;
let music;
let play2X;
let play2Y;
let redscore;
let bluescore;

/////////////////////////////////////////////////
/// loads the background music

function preload(){
  music = loadSound("assets/bkgrndmusic.mp3");
}

///////////////////////////////////////////////
// crerates grid variables and determins player 1 and 2 starting position


function setup() {
  createCanvas(900,600);
  cellsize = 600 /cols -1;
  grid = createRandom2dArray(cols, rows);
  music.setVolume(0.7);
  music.loop();
  playX = 0;
  playY = 0;
  play2X = rows -1;
  play2Y = cols -1;
}

//////////////////////////////////////////////
// creates grid


function draw() {
  background(255);
  redscore = 0;
  bluescore = 0;
  displayGrid();
  //////////////////////////////////////////
  ///determines redscore and when the blue team wins


  fill(0);
  textSize(25);
  text("Red Team Score ",655,165);
  if (redscore >= 175){
    background(255);
    fill(0);
    textSize(70);
    text("Red Team wins", 40, 300);
    noLoop();
  }
  /////////////////////////////////////////
  ///displays the red and blue teams score

  fill(0);
  textSize(25);
  text("Blue Team Score",655,265);
  fill(255, 0, 0);
  textSize(35);
  text(redscore, 590, 168);
  ////////////////////////////////////////
  /// determines bluescore and when the blue team wins


  fill(0,0,255);
  textSize(35);
  text(bluescore, 590, 268);
  if (bluescore >= 175){
    background(255);
    fill(0);
    textSize(70);
    text("Blue Team wins",40, 300);
    noLoop();
  }
  ////////////////////////////////////////
}

/////////////////////////////////////////////
// displays grid and the players and keeps count of players score

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellsize, y*cellsize, cellsize, cellsize);
      // drawing the red dots and adding to the red sides score
      if(grid[y][x] ===2){
        redscore ++;
        fill(255,0,0);
        ellipse(x*cellsize+ cellsize/2,y*cellsize+ cellsize/2,cellsize,cellsize);
      }
      // drawing the blue dots and adding to the blue score
      if(grid[y][x] ===3){
        bluescore ++;
        fill(0,0,255);
        ellipse(x*cellsize+ cellsize/2,y*cellsize+ cellsize/2,cellsize,cellsize);
      }
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////
//player 1 move commands

function keyTyped(){
  if(playY > 0){
    if(key === "w"){
      playY --;
      grid[playY][playX]=2;
    }
  }
  if (playY < cols-1){
    if (key === "s"){
      playY ++;
      grid[playY][playX]=2;
    }
  }
  if (playX < cols-1 ){
    if (key === "d"){
      playX ++;
      grid[playY][playX]=2;
    }
  }
  if (playX > 0){
    if (key === "a"){
      playX --;
      grid[playY][playX]=2;
    }
    //////////////////////////////////////////////////////////
    //player 2
    //you must move the 1st player to be able to move player 2

    if(play2Y > 0){
      if(key === "i"){
        play2Y --;
        grid[play2Y][play2X]=3;
      }
    }
    if (play2Y < cols-1){
      if (key === "k"){
        play2Y ++;
        grid[play2Y][play2X]=3;
      }
    }
    if (play2X < cols-1 ){
      if (key === "l"){
        play2X ++;
        grid[play2Y][play2X]=3;
      }
    }
    if (play2X > 0){
      if (key === "j"){
        play2X --;
        grid[play2Y][play2X]=3;
      }
    }
  }
}
/////////////////////////////////////////////////////////
// creates the arrays paramiters

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push(0);
      }
      else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}

///////////////////////////////////////////
