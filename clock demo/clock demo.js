// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(400, 400);
	angleMode(DEGREES);
}

function draw() {
  background(255);
	displayface()

}

function displayface(){
	// main circle
	translate(width/2, height/2);
	strokeWeight(4);
	fill(0,125,150);
	ellipse(0,0,400,400);

	//lil dot in mid
	fill(0);
	ellipse(0,0,10,10);

	// seconds line
	for (let i = 0; i < 60 ;i ++){
		strokeWeight(1);
		line(150,0,175,0);
		rotate(360/60);
	}

	//hour hand
	for (let i = 0; i < 12; i++){
		strokeWeight(3);
		line(135,0,175,0);
		rotate(360/12);
	}
}
