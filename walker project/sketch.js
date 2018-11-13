// walker oop demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.color = "red";
    this.speed =5;
    this.color2 = "blue";
  }

  display(){
    fill(this.color);
    stroke(this.color);
    ellipse(this.x,this.y,2,2);
  }
  move(){
    let choice = random(100);
    if (choice < 25) {
      // up
      this.y -= this.speed;
    }
    else if (choice <50){
      /// down
      this.y += this.speed;
    }
    else if (choice< 75) {
      this.x -= this.speed;

    }
    else {
      this .x += this.speed;
    }
  }
}


let ty;
let nv;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ty = new Walker();
  nv = new Walker();
  nv.color ="blue";
}

function draw() {
  ty.move();
  ty.display();
  nv.move();
  nv.display();
}
