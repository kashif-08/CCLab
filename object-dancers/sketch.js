
let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new spongeDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}
class spongeDancer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.y = height / 2 + 10 * sin(frameCount * 0.21);
    this.movingarmX = map(sin(frameCount * 0.21), -1, 1, -30, 30);
    this.movingarmY = map(sin(frameCount * 0.21), -1, 1, -35, -15);
    this.movinglegX = map(sin(frameCount * 0.21), -1, 1, -30, 50);
    this.movinglegY = map(sin(frameCount * 0.21), -1, 1, 60, 90);
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();

    //face
    rectMode(CENTER);
    fill(247, 247, 87);
    rect(0, -50, 75, 60, 8);

    // music recorder

    // outside
    fill('skyblue');
    rect(35, 0, 75, 40, 50);

    // inner circle left
    push()
    noFill()
    stroke(random(0, 250), 100, 100)
    strokeWeight(3)
    circle(20, -0, 20);
    pop()

    // inner circle right
    push()
    noFill()
    stroke(random(0, 250), 100, 100)
    strokeWeight(3)
    circle(50, -0, 20);
    pop()

    //eyes

    //eyebrow left
    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(-15, -60);
    vertex(-20, -70);

    endShape()
    pop()


    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(-12, -60);
    vertex(-12, -71);

    endShape()
    pop()


    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(-9, -60);
    vertex(-4, -70);

    endShape()
    pop()


    //eyebrow right
    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(15, -60);
    vertex(20, -70);

    endShape()
    pop()


    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(12, -60);
    vertex(12, -71);

    endShape()
    pop()


    push()
    stroke(0)
    strokeWeight(2)
    beginShape()

    vertex(9, -60);
    vertex(4, -70);

    endShape()
    pop()

    //whites
    fill(255);
    stroke(0);
    ellipse(-12, -55, 20, 23);
    ellipse(12, -55, 20, 23);

    //iris
    fill(124, 185, 217);
    noStroke()
    circle(-12, -55, 9);
    circle(12, -55, 9);

    //pupil
    fill(0);
    circle(-12, -55, 3);
    circle(12, -55, 3);

    //mouth
    fill(220, 20, 60);
    arc(0, -35, 20, 20, 0, PI);

    //tongue
    fill(255, 192, 203);
    arc(0, -30, 10, 20, 0, PI);

    //teeth
    fill(255);
    square(-5, -32.5, 5);
    square(5, -32.5, 5);

    //static body part of bob
    stroke(247, 247, 87);
    strokeWeight(8);
    line(0, -15, -15, 10);
    line(0, -15, 0, 20);
    line(0, 20, 10, 50);
    line(10, 50, 5, 100);

    //moving leg of bob
    stroke(247, 247, 87);
    line(0, 20, 25, 50);
    line(25, 50,  this.movinglegX, this.movinglegY);

    //moving arm of bob
    line(-15, 10, this.movingarmX, this.movingarmY);

    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}