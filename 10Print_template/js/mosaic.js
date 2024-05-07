let x = 0;
let y = 0;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  strokeWeight(5);
  stroke(255, 255, 255); // stroke color
  let colors = [
    "rgb(34,116,165)",
    "rgb(217,3,104)",
    "rgb(210,130,166)",
    "rgb(230,175,46)",
  ];
  currentColor = random(colors);

  fill(currentColor);
  // Randomly choose the shape
  if (random(1) < 0.5) {
    // Rectangle
    fill(currentColor);

    rect(x, y, size, size);
  } else if (random(1) < 0.66) {
    // Circle
    fill(currentColor);

    ellipse(x + size / 2, y + size / 2, size, size);
  } else {
    // Line
    line(x, y, x + size, y + size);
  }

  x += size;

  if (x > width) {
    x = 0;
    y += size;
  }
}