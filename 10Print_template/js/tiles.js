function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

let x = 0;
let y = 0;
let space = 50;

function draw() {
  stroke(255, 255, 255);

  let colors = ["rgb(130,2,9)", "rgb(217,3,104)", "rgb(247,92,3)"];
  currentColor = random(colors);

  fill(currentColor);

  rect(x, y, space, space);

  x += space; //senza questo comando le linee si sovrapporrebbero tutte alle coordinate x 0 e y 0
  if (x > width) {
    x = 0;
    y += space;
  } //senza questo comando non andrebbe a capo
}