// ball oop demo
// edan



class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.rad = 25;
    this.dx = random(-1000,0);
    this.dy = random(0,0);
    this.color= color(random(255), random(255), random(255));
  }
  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.rad*2, this.rad*2);
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;

    if (this.y <= 0 +this.rad || this.y >= height - this.rad){
      this.dy *= -1;
    }
    if (this.x <= 0 + this.rad || this.x > width - this.rad){
      this.dx *= -1;
    }
  }
}


let ballArray =[];







function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = ballArray.length - 1; i>= 0; i --){
    ballArray[i].update();
    ballArray[i].display();
  }
}

function mousePressed(){
  let someBall = new Ball(mouseX, mouseY);
  ballArray.push(someBall);
}
