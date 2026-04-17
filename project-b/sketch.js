//image related variables
let settingImage;
let boat;
let birds;
let birdX;

// sound related variables
let marketSound;

function preload() {
  settingImage = loadImage('images/main-setting.png');
  birds = loadImage('images/birds.gif');
  marketSound = loadSound('audios/market.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  boat = new Boat(0, 200, 2);
  birdX = 1000;
  birds.resize(300, 0);
}

function draw() {
  background(220);
  image(settingImage, 0, 0, width, height);
  image(birds, birdX, 0);
  birdX--;

  boat.move();
  boat.display();

  if (mouseX > 855 && mouseX < 1500 && mouseY > 340 && mouseY < 520) {
    if (!marketSound.isPlaying()) {
      marketSound.play();
    }
  } else {
    marketSound.stop();
  }
}


class Boat {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = loadImage('images/BOATS.png');
  }

  move() {
    this.x += this.speed * 0.1;
    if (this.x > width) {
      // this.x = -this.img.width;
    }
  }

  display() {
    image(this.img, this.x, this.y + random(300, 300.8), this.img.width, this.img.height);
  }
}