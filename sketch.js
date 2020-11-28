// let size = random(1, 100);
// let xPos = random(1,599);
// let yPos = random(1,599);




function setup() {
  createCanvas(600, 600);
  background(100);
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
  // strokeWeight(1);
  // let w = random(1, 100);
  // let h = random(1, 100);
  // let xPos2 = random(1, 599);
  // let yPos2 = random(1, 599);
  // ellipse(xPos2, yPos2, w, [h]);
  // let a2 = random(0, 255);
  // let b2 = random(0, 255);
  // let c2 = random(0, 255);
  // // let o = random(0, 1);
  // let f = color(a2, b2, c2);
  // fill(f);
  

}

