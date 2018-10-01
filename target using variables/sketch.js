let diamiter, slicewidth;
let x,y;
let sidewidth;
let size = 200

let colorlist = ["white", "white", "black" , "black", "blue" , "blue" , "red" , "red" , "yellow" , "yellow"];


function setup() {
  createCanvas(400, 400);
	x = width/2;
	y = height/2;
	slicewidth = 10;
}

function draw() {
  background(220);
	diamiter = 400;
	slicewidth = diamiter/10;
  stroke(100)
	//while(diamiter > 10) {
		//ellipse(x,y, diamiter, diamiter);
		//diamiter -= slicewidth;
	//}


// for (let diamiter  = 400; diamiter > 10; diamiter -= slicewidth){
// 	ellipse(x,y, diamiter, diamiter);
// }

	for(let i = 0; i< 10; i++ )  {
		fill(colorlist[i])
		ellipse(x,y, diamiter, diamiter);
		diamiter -= slicewidth;
	}

}
