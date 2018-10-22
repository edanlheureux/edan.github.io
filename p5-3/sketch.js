// terrain
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberofrect;
let rectwidth;
let time =0;
let rect =[];








function setup() {
  createCanvas(windowWidth, windowHeight);
  numberofrect =10;
  rectwidth = width/numberofrect;
  generaterects();
}

function draw() {
  background(255);
  fill(0);
  // time += 0.01;
  // numberofrect = noise(time) * width;
  // ellipse(numberofrect, height/2,30,30);
  displayrect();
}


function generaterects(){
  for (let i=0; i<numberofrect; i++) {
    let rectheight = noise(time) * height;
    let somerect = {
      x: i * rectwidth,
      y: height - rectheight,
      w: rectwidth,
      h: rectheight,
    };

    rect.push(somerect);
    time += 0.01;
  }

}

function displayrect(){
  for(let i=0; i<rect.length; i++){
    
  }
}
