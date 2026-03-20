let landscape = [];
let clouds = [];

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
}

function draw() {
  background(255);


  image(
    landscape[busAnim],
    0,
    0,
    landscape[0].width * .6,
    landscape[0].height * .6
  );

  busAnim = floor((frameCount / 20) % landscape.length);

  image(
    clouds[cloudAnim],
    0,
    0,
    clouds[0].width * .6,
    clouds[0].height * .6
  );
  moveClouds ()
}

  function moveClouds () {
    if (mouseIsPressed)
    cloudAnim = floor((frameCount / 20) % clouds.length);

  }
