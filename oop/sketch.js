let myBall;

function setup() {
  createCanvas(400, 400);
  myBall = new Ball(200,200);
}

function draw() {
  background(220);
  myBall.display();
  myBall.move();
}

class Ball {
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.dia = 50;
  }

  display() {
    circle(this.x, this.y, this.dia)
  }

  move() {
    this.y = sin(frameCount*0.1)*100 + 200
  }
}
