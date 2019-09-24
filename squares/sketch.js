let squareSize = 50;
let array = [];
// load before everything
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

// On window resize, update the canvas size and rerender the sketch
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawSquares();
}

function draw() {
  background(255);
  drawSquares();
}

function drawSquares() {
  for (let x = 0; x <= windowWidth - squareSize; x += squareSize) {
    for (let y = 0; y <= windowHeight - squareSize; y += squareSize) {
      let object = { x: 10 + x, y: 10 + y, w: squareSize, h: squareSize, r: random(0, 1) };
      array.push(object);
    }
  }
  array.forEach(({ x, y, w, h, r }) => {
    console.log({ x, y, w, h, r });
    if (r >= 0.5) {
      fill("black");
      stroke("white");
      rect(x, y, w, h);
    } else {
      fill("orange");
      stroke("white");
      rect(x, y, w, h);
    }
  });
}
