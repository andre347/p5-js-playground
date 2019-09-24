let randomValue;
let step = 25;

// load before everything
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
}

// On window resize, update the canvas size and rerender the sketch
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke("orange");
  strokeWeight(2.5);
  for (let x = 0; x < windowWidth; x += step) {
    for (let y = 0; y < windowWidth; y += step) {
      drawLine(x, y, step, step);
    }
  }
}

function drawLine(x, y, width, height) {
  // half of the time the line will change from top to bottom, bottom to top
  randomValue = random(0, 1) >= 0.5;
  console.log(randomValue);
  // conditional to render the result of the randomValue boolean
  randomValue ? line(x, y, x + width, y + height) : line(x + width, y, x, y + height);
}
