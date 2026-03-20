let landscape = [];
let clouds = [];
let movingBus;
let movingClouds;

let busAnim = 0;
let cloudAnim = 0;

function preload() {
  for (let i = 1; i <= 3; i++) {
    landscape.push(loadImage("anim" + i + ".jpg"));
  }
  for (let i = 1; i <= 16; i++) {
    clouds.push(loadImage("clouds" + i + ".png"));
  }
}


function setup() {
  createCanvas(1440, 1024);
  movingBus = landscape;
  movingClouds = clouds;
}

function draw() {
  background(255);


  image(
    movingBus[busAnim],
    0,
    0,
    movingBus[0].width * .6,
    movingBus[0].height * .6
  );

  busAnim = floor((frameCount / 20) % movingBus.length);

  image(
    movingClouds[cloudAnim],
    0,
    0,
    movingClouds[0].width * .6,
    movingClouds[0].height * .6
  );
  moveClouds ()
}

  function moveClouds () {
    if (mouseIsPressed)
    cloudAnim = floor((frameCount / 20) % movingClouds.length);

  }
