let circleMainSize = 100;
let cirOneSize = 10;
let cirTwoSize = 20;
let amp = 0.01;

let x1, y1, vx1, vy1, s1;
let x2, y2, vx2, vy2, s2;
let x3, y3, vx3, vy3, s3;
let x4, y4, vx4, vy4, s4;
let x5, y5, vx5, vy5, s5;
let x6, y6, vx6, vy6, s6;
let x7, y7, vx7, vy7, s7;
let x8, y8, vx8, vy8, s8;
let x9, y9, vx9, vy9, s9;
let x10, y10, vx10, vy10, s10;
let x11, y11, vx11, vy11, s11;
let x12, y12, vx12, vy12, s12;
let x13, y13, vx13, vy13, s13;
let x14, y14, vx14, vy14, s14;
let x15, y15, vx15, vy15, s15;
let x16, y16, vx16, vy16, s16;
let x17, y17, vx17, vy17, s17;
let x18, y18, vx18, vy18, s18;
let x19, y19, vx19, vy19, s19;
let x20, y20, vx20, vy20, s20;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent('p5-canvas-container');
  s1 = random(2, 8);
  x1 = random(-200, -10);
  y1 = random(-200, -10);
  vx1 = 0;
  vy1 = 0;
  s2 = random(2, 8);
  x2 = random(810, 1000);
  y2 = random(-200, -10);
  vx2 = 0;
  vy2 = 0;
  s3 = random(2, 8);
  x3 = random(-200, -10);
  y3 = random(510, 700);
  vx3 = 0;
  vy3 = 0;
  s4 = random(2, 8);
  x4 = random(810, 1000);
  y4 = random(510, 700);
  vx4 = 0;
  vy4 = 0;
  s5 = random(2, 8);
  x5 = random(-200, -10);
  y5 = random(height);
  vx5 = 0;
  vy5 = 0;
  s6 = random(2, 8);
  x6 = random(810, 1000);
  y6 = random(height);
  vx6 = 0;
  vy6 = 0;
  s7 = random(2, 8);
  x7 = random(width);
  y7 = random(-200, -10);
  vx7 = 0;
  vy7 = 0;
  s8 = random(2, 8);
  x8 = random(width);
  y8 = random(510, 700);
  vx8 = 0;
  vy8 = 0;
  s9 = random(2, 8);
  x9 = random(-200, -10);
  y9 = random(height);
  vx9 = 0;
  vy9 = 0;
  s10 = random(2, 8);
  x10 = random(810, 1000);
  y10 = random(height);
  vx10 = 0;
  vy10 = 0;
  s11 = random(2, 8);
  x11 = random(-200, -10);
  y11 = random(-200, -10);
  vx11 = 0;
  vy11 = 0;
  s12 = random(2, 8);
  x12 = random(810, 1000);
  y12 = random(510, 700);
  vx12 = 0;
  vy12 = 0;
  s13 = random(2, 8);
  x13 = random(width);
  y13 = random(-200, -10);
  vx13 = 0;
  vy13 = 0;
  s14 = random(2, 8);
  x14 = random(width);
  y14 = random(510, 700);
  vx14 = 0;
  vy14 = 0;
  s15 = random(2, 8);
  x15 = random(-200, -10);
  y15 = random(height);
  vx15 = 0;
  vy15 = 0;
  s16 = random(2, 8);
  x16 = random(810, 1000);
  y16 = random(-200, -10);
  vx16 = 0;
  vy16 = 0;
  s17 = random(2, 8);
  x17 = random(-200, -10);
  y17 = random(510, 700);
  vx17 = 0;
  vy17 = 0;
  s18 = random(2, 8);
  x18 = random(810, 1000);
  y18 = random(height);
  vx18 = 0;
  vy18 = 0;
  s19 = random(2, 8);
  x19 = random(width);
  y19 = random(-200, -10);
  vx19 = 0;
  vy19 = 0;
  s20 = random(2, 8);
  x20 = random(width);
  y20 = random(510, 700);
  vx20 = 0;
  vy20 = 0;
}

function draw() {
  background(0, 20);
  drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
  starsGravity();
  glowTwo(x, y);
  glowOne(x, y);
  strokeWeight(4);
  fill("black");
  if (mouseIsPressed) {
    circleMainSize = 120;
  } else {
    circleMainSize = 100;
  }
  circle(x, y, circleMainSize);
}

function glowOne(x, y) {
  push();
  noStroke();
  if (mouseIsPressed) {
    fill(255, 80, 0);
    cirOneSize = 40;
    amp = 0.05;
  } else {
    fill(251, 166, 78, 100);
    cirOneSize = 10;
    amp = 0.01;
  }
  translate(x, y);
  rotate(-frameCount * amp);
  for (let s = 20; s <= 80; s++) {
    for (let a = 0; a < 360; a += 20) {
      let x = sin(radians(a) + s) * s;
      let y = cos(radians(a) + s) * s;
      circle(0.8 * x, 0.8 * y, cirOneSize);
    }
  }
  pop();
}

function glowTwo(x, y) {
  push();
  noStroke();
  if (mouseIsPressed) {
    fill(255, 40, 0);
    cirTwoSize = 60;
    amp = 0.05;
  } else {
    fill(255, 129, 0, 100);
    cirTwoSize = 20;
    amp = 0.01;
  }
  translate(x, y);
  rotate(-frameCount * amp);
  for (let s = 20; s <= 80; s++) {
    for (let a = 0; a < 360; a += 30) {
      let x = sin(radians(a) + s) * s;
      let y = cos(radians(a) + s) * s;
      circle(x * 1.2, y * 1.2, cirTwoSize);
    }
  }
  pop();
}

function starsGravity() {
  noStroke();
  fill(255);
  updateParticle1();
  updateParticle2();
  updateParticle3();
  updateParticle4();
  updateParticle5();
  updateParticle6();
  updateParticle7();
  updateParticle8();
  updateParticle9();
  updateParticle10();
  updateParticle11();
  updateParticle12();
  updateParticle13();
  updateParticle14();
  updateParticle15();
  updateParticle16();
  updateParticle17();
  updateParticle18();
  updateParticle19();
  updateParticle20();
}

function updateParticle1() {
  if (mouseIsPressed) {
    vx1 += (width / 2 - x1) * 0.0005;
    vy1 += (height / 2 - y1) * 0.0005;
  } else {
    vx1 += (width / 2 - x1) * 0.00005;
    vy1 += (height / 2 - y1) * 0.00005;
  }
  x1 += vx1;
  y1 += vy1;
  if (dist(x1, y1, width / 2, height / 2) < 50) {
    x1 = random(-200, -10);
    y1 = random(-200, -10);
    vx1 = 0;
    vy1 = 0;
  }
  circle(x1, y1, s1);
}
function updateParticle2() {
  if (mouseIsPressed) {
    vx2 += (width / 2 - x2) * 0.0006;
    vy2 += (height / 2 - y2) * 0.0006;
  } else {
    vx2 += (width / 2 - x2) * 0.00006;
    vy2 += (height / 2 - y2) * 0.00006;
  }
  x2 += vx2;
  y2 += vy2;
  if (dist(x2, y2, width / 2, height / 2) < 50) {
    x2 = random(810, 1000);
    y2 = random(-200, -10);
    vx2 = 0;
    vy2 = 0;
  }
  circle(x2, y2, s2);
}
function updateParticle3() {
  if (mouseIsPressed) {
    vx3 += (width / 2 - x3) * 0.0007;
    vy3 += (height / 2 - y3) * 0.0007;
  } else {
    vx3 += (width / 2 - x3) * 0.00007;
    vy3 += (height / 2 - y3) * 0.00007;
  }
  x3 += vx3;
  y3 += vy3;
  if (dist(x3, y3, width / 2, height / 2) < 50) {
    x3 = random(-200, -10);
    y3 = random(510, 700);
    vx3 = 0;
    vy3 = 0;
  }
  circle(x3, y3, s3);
}
function updateParticle4() {
  if (mouseIsPressed) {
    vx4 += (width / 2 - x4) * 0.0008;
    vy4 += (height / 2 - y4) * 0.0008;
  } else {
    vx4 += (width / 2 - x4) * 0.00008;
    vy4 += (height / 2 - y4) * 0.00008;
  }
  x4 += vx4;
  y4 += vy4;
  if (dist(x4, y4, width / 2, height / 2) < 50) {
    x4 = random(810, 1000);
    y4 = random(510, 700);
    vx4 = 0;
    vy4 = 0;
  }
  circle(x4, y4, s4);
}
function updateParticle5() {
  if (mouseIsPressed) {
    vx5 += (width / 2 - x5) * 0.0005;
    vy5 += (height / 2 - y5) * 0.0005;
  } else {
    vx5 += (width / 2 - x5) * 0.00005;
    vy5 += (height / 2 - y5) * 0.00005;
  }
  x5 += vx5;
  y5 += vy5;
  if (dist(x5, y5, width / 2, height / 2) < 50) {
    x5 = random(-200, -10);
    y5 = random(height);
    vx5 = 0;
    vy5 = 0;
  }
  circle(x5, y5, s5);
}
function updateParticle6() {
  if (mouseIsPressed) {
    vx6 += (width / 2 - x6) * 0.0006;
    vy6 += (height / 2 - y6) * 0.0006;
  } else {
    vx6 += (width / 2 - x6) * 0.00009;
    vy6 += (height / 2 - y6) * 0.00009;
  }
  x6 += vx6;
  y6 += vy6;
  if (dist(x6, y6, width / 2, height / 2) < 50) {
    x6 = random(810, 1000);
    y6 = random(height);
    vx6 = 0;
    vy6 = 0;
  }
  circle(x6, y6, s6);
}
function updateParticle7() {
  if (mouseIsPressed) {
    vx7 += (width / 2 - x7) * 0.0007;
    vy7 += (height / 2 - y7) * 0.0007;
  } else {
    vx7 += (width / 2 - x7) * 0.00007;
    vy7 += (height / 2 - y7) * 0.00007;
  }
  x7 += vx7;
  y7 += vy7;
  if (dist(x7, y7, width / 2, height / 2) < 50) {
    x7 = random(width);
    y7 = random(-200, -10);
    vx7 = 0;
    vy7 = 0;
  }
  circle(x7, y7, s7);
}
function updateParticle8() {
  if (mouseIsPressed) {
    vx8 += (width / 2 - x8) * 0.0008;
    vy8 += (height / 2 - y8) * 0.0008;
  } else {
    vx8 += (width / 2 - x8) * 0.00008;
    vy8 += (height / 2 - y8) * 0.00008;
  }
  x8 += vx8;
  y8 += vy8;
  if (dist(x8, y8, width / 2, height / 2) < 50) {
    x8 = random(width);
    y8 = random(510, 700);
    vx8 = 0;
    vy8 = 0;
  }
  circle(x8, y8, s8);
}
function updateParticle9() {
  if (mouseIsPressed) {
    vx9 += (width / 2 - x9) * 0.0009;
    vy9 += (height / 2 - y9) * 0.0009;
  } else {
    vx9 += (width / 2 - x9) * 0.00006;
    vy9 += (height / 2 - y9) * 0.00006;
  }
  x9 += vx9;
  y9 += vy9;
  if (dist(x9, y9, width / 2, height / 2) < 50) {
    x9 = random(-200, -10);
    y9 = random(height);
    vx9 = 0;
    vy9 = 0;
  }
  circle(x9, y9, s9);
}
function updateParticle10() {
  if (mouseIsPressed) {
    vx10 += (width / 2 - x10) * 0.001;
    vy10 += (height / 2 - y10) * 0.001;
  } else {
    vx10 += (width / 2 - x10) * 0.00005;
    vy10 += (height / 2 - y10) * 0.00005;
  }
  x10 += vx10;
  y10 += vy10;
  if (dist(x10, y10, width / 2, height / 2) < 50) {
    x10 = random(810, 1000);
    y10 = random(height);
    vx10 = 0;
    vy10 = 0;
  }
  circle(x10, y10, s10);
}
function updateParticle11() {
  if (mouseIsPressed) {
    vx11 += (width / 2 - x11) * 0.0005;
    vy11 += (height / 2 - y11) * 0.0005;
  } else {
    vx11 += (width / 2 - x11) * 0.00009;
    vy11 += (height / 2 - y11) * 0.00009;
  }
  x11 += vx11;
  y11 += vy11;
  if (dist(x11, y11, width / 2, height / 2) < 50) {
    x11 = random(-200, -10);
    y11 = random(-200, -10);
    vx11 = 0;
    vy11 = 0;
  }
  circle(x11, y11, s11);
}
function updateParticle12() {
  if (mouseIsPressed) {
    vx12 += (width / 2 - x12) * 0.0006;
    vy12 += (height / 2 - y12) * 0.0006;
  } else {
    vx12 += (width / 2 - x12) * 0.00007;
    vy12 += (height / 2 - y12) * 0.00007;
  }
  x12 += vx12;
  y12 += vy12;
  if (dist(x12, y12, width / 2, height / 2) < 50) {
    x12 = random(810, 1000);
    y12 = random(510, 700);
    vx12 = 0;
    vy12 = 0;
  }
  circle(x12, y12, s12);
}
function updateParticle13() {
  if (mouseIsPressed) {
    vx13 += (width / 2 - x13) * 0.0007;
    vy13 += (height / 2 - y13) * 0.0007;
  } else {
    vx13 += (width / 2 - x13) * 0.00008;
    vy13 += (height / 2 - y13) * 0.00008;
  }
  x13 += vx13;
  y13 += vy13;
  if (dist(x13, y13, width / 2, height / 2) < 50) {
    x13 = random(width);
    y13 = random(-200, -10);
    vx13 = 0;
    vy13 = 0;
  }
  circle(x13, y13, s13);
}
function updateParticle14() {
  if (mouseIsPressed) {
    vx14 += (width / 2 - x14) * 0.0008;
    vy14 += (height / 2 - y14) * 0.0008;
  } else {
    vx14 += (width / 2 - x14) * 0.00006;
    vy14 += (height / 2 - y14) * 0.00006;
  }
  x14 += vx14;
  y14 += vy14;
  if (dist(x14, y14, width / 2, height / 2) < 50) {
    x14 = random(width);
    y14 = random(510, 700);
    vx14 = 0;
    vy14 = 0;
  }
  circle(x14, y14, s14);
}
function updateParticle15() {
  if (mouseIsPressed) {
    vx15 += (width / 2 - x15) * 0.0009;
    vy15 += (height / 2 - y15) * 0.0009;
  } else {
    vx15 += (width / 2 - x15) * 0.00005;
    vy15 += (height / 2 - y15) * 0.00005;
  }
  x15 += vx15;
  y15 += vy15;
  if (dist(x15, y15, width / 2, height / 2) < 50) {
    x15 = random(-200, -10);
    y15 = random(height);
    vx15 = 0;
    vy15 = 0;
  }
  circle(x15, y15, s15);
}
function updateParticle16() {
  if (mouseIsPressed) {
    vx16 += (width / 2 - x16) * 0.0006;
    vy16 += (height / 2 - y16) * 0.0006;
  } else {
    vx16 += (width / 2 - x16) * 0.00007;
    vy16 += (height / 2 - y16) * 0.00007;
  }
  x16 += vx16;
  y16 += vy16;
  if (dist(x16, y16, width / 2, height / 2) < 50) {
    x16 = random(810, 1000);
    y16 = random(-200, -10);
    vx16 = 0;
    vy16 = 0;
  }
  circle(x16, y16, s16);
}
function updateParticle17() {
  if (mouseIsPressed) {
    vx17 += (width / 2 - x17) * 0.0007;
    vy17 += (height / 2 - y17) * 0.0007;
  } else {
    vx17 += (width / 2 - x17) * 0.00008;
    vy17 += (height / 2 - y17) * 0.00008;
  }
  x17 += vx17;
  y17 += vy17;
  if (dist(x17, y17, width / 2, height / 2) < 50) {
    x17 = random(-200, -10);
    y17 = random(510, 700);
    vx17 = 0;
    vy17 = 0;
  }
  circle(x17, y17, s17);
}
function updateParticle18() {
  if (mouseIsPressed) {
    vx18 += (width / 2 - x18) * 0.0008;
    vy18 += (height / 2 - y18) * 0.0008;
  } else {
    vx18 += (width / 2 - x18) * 0.00009;
    vy18 += (height / 2 - y18) * 0.00009;
  }
  x18 += vx18;
  y18 += vy18;
  if (dist(x18, y18, width / 2, height / 2) < 50) {
    x18 = random(810, 1000);
    y18 = random(height);
    vx18 = 0;
    vy18 = 0;
  }
  circle(x18, y18, s18);
}
function updateParticle19() {
  if (mouseIsPressed) {
    vx19 += (width / 2 - x19) * 0.0009;
    vy19 += (height / 2 - y19) * 0.0009;
  } else {
    vx19 += (width / 2 - x19) * 0.00006;
    vy19 += (height / 2 - y19) * 0.00006;
  }
  x19 += vx19;
  y19 += vy19;
  if (dist(x19, y19, width / 2, height / 2) < 50) {
    x19 = random(width);
    y19 = random(-200, -10);
    vx19 = 0;
    vy19 = 0;
  }
  circle(x19, y19, s19);
}
function updateParticle20() {
  if (mouseIsPressed) {
    vx20 += (width / 2 - x20) * 0.001;
    vy20 += (height / 2 - y20) * 0.001;
  } else {
    vx20 += (width / 2 - x20) * 0.00007;
    vy20 += (height / 2 - y20) * 0.00007;
  }
  x20 += vx20;
  y20 += vy20;
  if (dist(x20, y20, width / 2, height / 2) < 50) {
    x20 = random(width);
    y20 = random(510, 700);
    vx20 = 0;
    vy20 = 0;
  }
  circle(x20, y20, s20);
}
