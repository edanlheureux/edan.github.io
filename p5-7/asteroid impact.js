// Asteroid Impact Demo
// Edan L'Heureux




class Asteroid {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-10,10);
    this.dy = random(-10,10);
    this.color=(165,82,82);
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let i=0; i<fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].display();
  }

}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Asteroid(mouseX, mouseY);
    fireworks.push(someParticle);
  }
}
