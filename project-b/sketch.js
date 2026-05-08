//canvas

let canvasWid = 1440;
let canvasHei = 800;

// image related variables
let animIndex;
let settingImage;
let settingImageSnow;
let boat;
let birds;
let birdX;
let snowflakes = [];
let marketImg;
let chinar;

//smoke
let smokeY1, smokeY2, smokeY3;
let smokeX1, smokeX2, smokeX3;

//overlay/opening img
let openingImg;
let isOpening = true;
let enterBtn;

//animated characters
// let stateOne;
// let stateTwo;
// let stateThree;
let animFrames = [];
let animX = -300;
let animY = -12

// sound related variables
let marketSound;
let shikaraSound;
let hazratbal;
let summerSound;
let snowSound;
let song1;
let song2;
let song3;
let song4;

// season toggle
let isSnow = false;
let toggleBtn;

// music player
let currentSong = 0;
let isPlaying = false;
let playBtn;
let nextBtn;
let prevBtn;
let songNames = ['Hoshdar', 'Hoshmatiye', 'Golabaw', 'Jhelum'];

function preload() {
  openingImg = loadImage('images/opening.png');
  settingImage = loadImage('images/main-setting.png');
  settingImageSnow = loadImage('images/main-setting-snow.png');
  chinar = loadImage('images/chinar.png');
  // stateOne = loadImage('images/anim-1.png');
  // stateTwo = loadImage('images/anim-2.png');
  // stateThree = loadImage('images/anim-3.png');
  animFrames[0] = loadImage('images/anim-1.png');
  animFrames[1] = loadImage('images/anim-2.png');
  animFrames[2] = loadImage('images/anim-3.png');

  marketImg = loadImage('images/goni-khan-market.jpg');
  birds = loadImage('images/birds.gif');
  marketSound = loadSound('audios/market.mp3');
  shikaraSound = loadSound('audios/Shikara.mp3');
  hazratbal = loadSound('audios/Hazratbal.mp3');
  summerSound = loadSound('audios/summer-sound.wav');
  snowSound = loadSound('audios/snow-sound.wav');
  song1 = loadSound('audios/Hoshdar.mp3');
  song2 = loadSound('audios/Hoshmatiye.mp3');
  song3 = loadSound('audios/Golabaw.mp3');
  song4 = loadSound('audios/Jhelum.mp3');
}

function setup() {
  createCanvas(canvasWid, canvasHei);
  boat = new Boat(130, 280, 2);
  birdX = 1000;
  birds.resize(300, 0);

  for (let i = 0; i < 100; i++) {
    snowflakes[i] = new Snowflake();
  }

  //smoke

  smokeX1 = 366; smokeY1 = 210;
  smokeX2 = 366; smokeY2 = 180;
  smokeX3 = 366; smokeY3 = 150;

  //entry button

  enterBtn = createButton('Enter');
  enterBtn.position(canvasWid / 2 - 50, canvasHei / 2 + 100);
  enterBtn.style('padding', '12px 30px');
  enterBtn.style('font-size', '18px');
  enterBtn.style('cursor', 'pointer');
  enterBtn.style('border', 'none');
  enterBtn.style('border-radius', '8px');
  enterBtn.style('background-color', 'rgba(0,0,0,0.5)');
  enterBtn.style('color', 'white');
  enterBtn.mousePressed(function () {
    isOpening = false;
    enterBtn.remove();
    summerSound.loop();
    toggleBtn.show();
    prevBtn.show();
    playBtn.show();
    nextBtn.show();
  });

  // toggle button
  toggleBtn = createButton('❄️');
  toggleBtn.position(20, 20);
  toggleBtn.style('padding', '10px 16px');
  toggleBtn.style('font-size', '16px');
  toggleBtn.style('cursor', 'pointer');
  toggleBtn.style('border', 'none');
  toggleBtn.style('border-radius', '8px');
  toggleBtn.style('background-color', '#4a90d9');
  toggleBtn.style('color', 'white');
  toggleBtn.mousePressed(toggleSeason);
  toggleBtn.hide();

  // prev button
  prevBtn = createButton('‹');
  prevBtn.position(canvasWid - 160, canvasHei - 80);
  prevBtn.style('font-size', '24px');
  prevBtn.style('cursor', 'pointer');
  prevBtn.style('border', 'none');
  prevBtn.style('border-radius', '8px');
  prevBtn.style('background-color', 'rgba(0,0,0,0.5)');
  prevBtn.style('color', 'white');
  prevBtn.style('width', '32px');
  prevBtn.style('height', '32px');
  prevBtn.mousePressed(function () {
    currentSong = (currentSong - 1 + 4) % 4;
    if (isPlaying) {
      playSong(currentSong);
    }
    playBtn.html('⏸');
  });
  prevBtn.hide();

  // play button
  playBtn = createButton('▶');
  playBtn.position(canvasWid - 120, canvasHei - 80);
  playBtn.style('font-size', '14px');
  playBtn.style('cursor', 'pointer');
  playBtn.style('border', 'none');
  playBtn.style('border-radius', '8px');
  playBtn.style('background-color', 'rgba(0,0,0,0.5)');
  playBtn.style('color', 'white');
  playBtn.style('width', '32px');
  playBtn.style('height', '32px');
  playBtn.mousePressed(function () {
    if (isPlaying) {
      song1.stop(); song2.stop(); song3.stop(); song4.stop();
      isPlaying = false;
      playBtn.html('▶');
    } else {
      playSong(currentSong);
      isPlaying = true;
      playBtn.html('⏸');
    }
  });
  playBtn.hide();

  // next button
  nextBtn = createButton('›');
  nextBtn.position(canvasWid - 80, canvasHei - 80);
  nextBtn.style('font-size', '24px');
  nextBtn.style('cursor', 'pointer');
  nextBtn.style('border', 'none');
  nextBtn.style('border-radius', '8px');
  nextBtn.style('background-color', 'rgba(0,0,0,0.5)');
  nextBtn.style('color', 'white');
  nextBtn.style('width', '32px');
  nextBtn.style('height', '32px');
  nextBtn.mousePressed(function () {
    currentSong = (currentSong + 1) % 4;
    if (isPlaying) {
      playSong(currentSong);
    }
    playBtn.html('⏸');
  });
  nextBtn.hide();
}

function playSong(index) {
  let all = [song1, song2, song3, song4];
  for (let i = 0; i < all.length; i++) {
    all[i].stop();
  }
  all[index].play();
}

function toggleSeason() {
  isSnow = !isSnow;
  if (isSnow) {
    toggleBtn.html('☀️');
    toggleBtn.style('background-color', '#6ab0e8');
    summerSound.stop();
    snowSound.loop();
  } else {
    toggleBtn.html('❄️');
    toggleBtn.style('background-color', '#4a90d9');
    snowSound.stop();
    summerSound.loop();
  }
}

function draw() {
  console.log(mouseX, mouseY);
  background(220);
  if (isOpening) {
    image(openingImg, 0, 0);
  } else {

    // background based on toggle
    if (isSnow) {
      image(settingImageSnow, 0, 0, width, height);
      for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].move();
        snowflakes[i].show();
      }
    } else {
      image(settingImage, 0, 0, width, height);
    }

    image(birds, birdX, 0);
    if (birdX < -400) {
      birdX = 1600;
    } else {
      birdX--;

    }

    boat.move();
    boat.display();
    boat.hover();


    if (mouseX > 855 && mouseX < 1500 && mouseY > 340 && mouseY < 500) {
      fill(255);
      textSize(16);
      text('Shopping in Goni Khan Market', canvasWid / 2, canvasHei - 60);
      textAlign('center');
      if (!marketSound.isPlaying()) {
        marketSound.play();
      }
    } else {
      marketSound.stop();
    }

    animX += 0.2;
    animY += 0.007
    if (animX > 250) {
      animX = -300;
      animY = -12;
    }
    animIndex = floor((frameCount / 10) % animFrames.length);  // animate on hover
    image(animFrames[animIndex], animX, animY);

    if (mouseX > 313 && mouseX < 425 && mouseY > 170 && mouseY < 320) {
      fill(255);
      textSize(16);
      text('Soothing sounds of Hazratbal', canvasWid / 2, canvasHei - 60);
      textAlign('center');
      if (!hazratbal.isPlaying()) {
        hazratbal.play();
      }
    } else {
      hazratbal.stop();
    }

    // song name above player
    if (isPlaying) {
      fill(255);
      noStroke();
      textSize(14);
      text(songNames[currentSong], canvasWid - 130, canvasHei - 90);
    }


    // smoke
    noStroke();
    fill(117, 123, 130);

    smokeY1 -= 0.5;
    smokeX1 += random(-0.2, 0.2)
    if (smokeY1 < -20) {
      smokeY1 = 210;
    }

    smokeY2 -= 0.5;
    smokeX2 += random(-0.2, 0.2)
    if (smokeY2 < -20) {
      smokeY2 = 210;
    }

    smokeY3 -= 0.5;
    smokeX3 += random(-0.2, 0.2)
    if (smokeY3 < -20) {
      smokeY3 = 210;
    }

    ellipse(smokeX1, smokeY1, 20, 20);
    ellipse(smokeX2, smokeY2, 15, 15);
    ellipse(smokeX3, smokeY3, 10, 10);

    image(chinar, mouseX - 25, mouseY - 25, 50, 50);
    noCursor();
  }

  // manage background sound
  let isHoveringBoat = mouseX > boat.x && mouseX < boat.x + 230 && mouseY > boat.y + 300 && mouseY < boat.y + 370;
  let isHoveringMarket = mouseX > 855 && mouseX < 1500 && mouseY > 340 && mouseY < 500;
  let isHoveringMosque = mouseX > 313 && mouseX < 425 && mouseY > 170 && mouseY < 320;

  if (isHoveringBoat || isHoveringMarket || isHoveringMosque || isPlaying) {
    summerSound.stop();
    snowSound.stop();
  } else {
    if (isSnow) {
      if (!snowSound.isPlaying()) {
        snowSound.loop();
      }
    } else {
      if (!summerSound.isPlaying()) {
        summerSound.loop();
      }
    }
  }
}

function mousePressed() {
  if (mouseX > 855 && mouseX < 1500 && mouseY > 340 && mouseY < 500) {
    alert('Goni Khan Market: \n\nOne of the oldest and busiest markets in Srinagar, particularly for women, to shop for occasions and festivals like Eid');
  } else if (mouseX > 313 && mouseX < 425 && mouseY > 170 && mouseY < 320) {
    alert('Hazratbal Mosque: \n\nA sacred mosque on the shores of Dal Lake, believed to house a relic of the Prophet. It is the most important shrine in Kashmir.');
  } else if (mouseX > boat.x && mouseX < boat.x + 230 && mouseY > boat.y + 300 && mouseY < boat.y + 370) {
    alert('Shikara Boat: \n\nA traditional wooden boat found on Dal Lake. Shikaras are used for fishing, transportation, and tourism, and are an iconic symbol of Kashmir.');
  }
}

class Boat {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = loadImage('images/moving-shikara.png');
  }

  move() {
    this.x += this.speed * 0.1;
    if (this.x > width) {
      this.x = 230;
    }
  }

  hover() {
    if (mouseX > this.x && mouseX < this.x + 230 && mouseY > this.y + 300 && mouseY < this.y + 370) {
      fill(255);
      textSize(16);
      text('Shikara Conversations', canvasWid / 2, canvasHei - 60);
      textAlign('center');
      // this.x += this.speed * 0.1;
      if (!shikaraSound.isPlaying()) {
        shikaraSound.play();
      }
    } else {
      shikaraSound.stop();
    }
  }

  display() {
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(2);
    // rect(this.x, this.y + 300, this.img.width, this.img.height);
    image(this.img, this.x, this.y + random(300, 300.8));
  }
}


class Snowflake {
  constructor() {
    this.x = random(width);
    this.y = random(-height, height);
    this.size = random(4, 10);
    this.speed = random(3, 7);
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  show() {
    noStroke();
    fill(255, 255, 255, 200);
    circle(this.x, this.y, this.size);
  }
}