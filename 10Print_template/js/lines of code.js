let x = 40;
let y = 30;
let size = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {
  strokeWeight(5);

  if (random(1) < 0.5) {
    rect(x, y);
    stroke(255, 0, 0);
  } else {
    line(x, y, x + size, y);
    stroke(0, 0, 255);
  }
  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }
}