let x = 10;
let y = 10;
let size = 9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
}

function draw() {
  strokeWeight(8);

  if (random(1) < 0.5) {
    stroke(0, 255, 0);
    point(x, y, x, y);
  } else {
    stroke(0, 200, 100);
    point(x, y + size, y, x + size);
  }
  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }
}