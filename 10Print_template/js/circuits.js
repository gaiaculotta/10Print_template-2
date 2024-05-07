function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

let x = 0;
let y = 0;
let size = 50;

let x2 = 25;
let y2 = 25;
let r = 25;

function draw() {
  strokeWeight(3);
  stroke(255, 255, 255);

  if (random(1) < 0.5) {
    line(x + size, y, x + size, y + size);
  } else {
    line(x, y + size, x + size, y);
  }
  x += size; //senza questo comando le linee si sovrapporrebbero tutte alle coordinate x 0 e y 0
  if (x > width) {
    x = 0;
    y += size; //senza questo comando non andrebbe a capo

    let colors = ["#FFEB3B", "rgb(217,3,104)", "rgb(247,92,3)"];
    currentColor = random(colors);

    fill(currentColor);
    if (random(1) < 0.2) {
      line(x2+25, y2-25, x2-25, y2+25); // Linea diagonale sotto il cerchio
      ellipse(x2, y2, r);
    } else {
      noStroke();
      noFill();
      ellipse(x2, y2, 1);
    }
    x2 += size; //senza questo comando le linee si sovrapporrebbero tutte alle coordinate x 0 e y 0
    if (x2 > width) {
      x2 = 25;
      y2 += size; //senza questo comando non andrebbe a capo
    }
  }
}
