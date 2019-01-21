// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor (x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx =4;
    this.dy =4;
    this.color = color(random(255),random(255),random(255));
  }
  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,3,3);
  }
  move(){
    let choice = random(100);
    if (choice <25){
      this.x -= this.dx;
    }
    else if(choice <50){
    }
  }
}





let bob;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bob = new Walker(width/2,height/2);
}

function draw() {
  bob.update();
  bob.display();
}
