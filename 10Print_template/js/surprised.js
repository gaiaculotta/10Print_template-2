function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(28,49,68);

  let size = 60; // Diametro del cerchio e base del triangolo
  let spacing = 80; // Spaziatura tra i moduli

  // Variabili per i colori
  let circleColor = color(255, 200, 200); // Rosa chiaro per i cerchi
  //let triangleColor = color(random(255),random(255),random(255)); // Bianco per i triangoli

  // Cicla attraverso la griglia
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      // Posizione del centro del cerchio
      let cx = x + size / 2;
      let cy = y + size / 2;

      // Disegna il triangolo
      fill(color(random(255), random(255), random(255)));
      noStroke();
      triangle(x, y + size, x + size / 2, y, x + size, y + size);

      // Disegna il cerchio
      fill(circleColor);
      ellipse(cx, cy, size);
      fill(0);
      ellipse(cx - 11, cy - 3, 5);
      ellipse(cx + 10, cy - 3, 5);
      ellipse(cx, cy + 10, 10);

      //ellipse(30,43,10)
      //bezier(19,43,19,50,40,50,40,43)
      //line(19,43,40,43)
    }
  }
}
