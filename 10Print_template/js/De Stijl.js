let x = 0;
let y = 0;
let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(5);
  
  if (random(1) < 0.33) {
    fill(255, 255, 0);
    rect(x, y, size, size);
  } else if (random(1) < 0.66) {
    fill(0, 0, 255);
    rect(x, y + size, size, size);
  } else {
    fill(255, 0, 0);
    rect(x, y, size, size);
  }
  
  x += size; 
  
  if (x > width) {
    x = 0;
    y += size;
  }
}