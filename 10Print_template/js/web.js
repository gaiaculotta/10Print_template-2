function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(3);
}

let x = 0;
let y = 0;
let size = 50;

let x2 = 25;
let y2 = 25;
let r = 25;

function draw() {
  stroke(255);

  // Disegna una linea o una X casuale
  if (random(1) < 0.5) {
    line(x, y, x + size, y + size); // Linea da angolo a angolo
    line(x + size, y, x, y + size);
  } else {
    line(x + size / 2, y, x + size / 2, y + size); // Linea verticale
    line(x, y + size / 2, x + size, y + size / 2); // Linea orizzontale
  }

  x += size;
  if (x > width) {
    x = 0;
    y += size;
  }

  // Gestione dei cerchi colorati con linea diagonale
  let colors = ["#102FDD", "rgb(217,3,104)", "rgb(247,92,3)"];
  let currentColor = random(colors);

  fill(currentColor);
  if (random(1) < 0.19) {
    noStroke();
    ellipse(x2, y2, random(25, 50));
  } else {
    noStroke();
    ellipse(x2, y2, 1);
  }

  x2 += size;
  if (x2 > width) {
    x2 = 25;
    y2 += size;
  }

  // Limita la frequenza di aggiornamento per migliorare la visualizzazione
  frameRate(10);
}
