




function setup() {
  createCanvas(600, 600);
  background(111);
}

function draw() {
  // background(100);
  strokeWeight(1);
  let size = random(1, 125);
  let xPos = random(1, 599);
  let yPos = random(1, 599);
  circle(xPos, yPos, size);
  let a = random(0, 255);
  let b = random(0, 255);
  let c = random(0, 255);
  // let o = random(0, 1);
  let f = color(a, b, c);
  fill(f);
 
  

}

