// grid
// edan l'heureux
// oct 24 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 10;
let cols = 10;
let grid;
let cellsize;


function setup() {
  createCanvas(600, 600);
  cellsize = width /cols;
  grid = createrandom2darray(cols, rows);
}
function draw() {
  background(255);
  displaygrid();

}

function mousePressed(){
  let x = floor(mouseX / cellsize);
  let y = floor(mouseY / cellsize);

  if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
}

function displaygrid(){
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill(0);
      }
      else{
        fill(255);
      }
      rect(x*cellsize, y*cellsize,cellsize,cellsize);
    }
  }
}


function createrandom2darray(){
  let randomgrid = [];
  for (let y = 0; y < rows; y++){
    randomgrid.push([]);
    for (let x = 0; x < cols; x++){
      if (random(100) < 50) {
        randomgrid[y].push(0);
      }
      else{
        randomgrid[y].push(1);
      }
    }
  }
  return randomgrid;
}
