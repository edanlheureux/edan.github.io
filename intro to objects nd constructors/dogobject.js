// initial classes demo
// edan
// 11/13/18

class Dog {
//   constructor() {
//     this.name ="fido";
//     this.age = 0;
//   }

    constructor(name) {
      this.name = name;
      this.age = 0;
    }

  bark(){
    console.log("woof my name is " + this.name);
  }
}

let myDog = new Dog("snoopy");
let otherDog = new Dog("fido");

function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  otherDog.bark();
}

function draw() {

}
