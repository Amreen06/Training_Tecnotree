export default function Sketch(p5) {
  let dots = [];

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(0);
    for (let i = 0; i < 50; i++) {
      dots.push(new Dot(p5.random(p5.width), p5.random(p5.height)));
    }
  };

  p5.draw = () => {
    p5.background(0);
    for (let i = 0; i < dots.length; i++) {
      dots[i].move();
      dots[i].display();
      for (let j = 0; j < dots.length; j++) {
        if (i !== j && p5.dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) < 100) {
          p5.stroke(255, 50);
          p5.line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
        }
      }
    }
  };

  class Dot {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.color = p5.color(p5.random(255), p5.random(255), p5.random(255));
      this.speed = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
    }

    move() {
      this.x += this.speed.x;
      this.y += this.speed.y;
      if (this.x < 0 || this.x > p5.width) {
        this.speed.x *= -1;
      }
      if (this.y < 0 || this.y > p5.height) {
        this.speed.y *= -1;
      }
    }

    display() {
      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.x, this.y, 10, 10);
    }
  }
}
