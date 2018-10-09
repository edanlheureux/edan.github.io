// image manip demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let img;
let x,y;
let dx,dy;
let greyimg;


function preload(){
  img = loadImage("assets/kirby.PNG");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img,0,0);
  greyimg = makegreyimg(img);

}

function draw() {

}


function makegreyimg(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);
  sourceImage.loadPixels();
  img.loadPixels();


  for (let x =0; x < img.width; x++){
    for (let y =0; y < img.width; x++){
      let thispixle = sourceImage.get(x,y);

      let r = red(thispixle);
      let g = green(thispixle);
      let b = blue(thispixle);

      let average = (r + g + b) /3;


      let newPixle = color(average, average, average);

      img.set(x,y, newPixle);


    }
  }
  img.updatepixles();
  return img;
}
