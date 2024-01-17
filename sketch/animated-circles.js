let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");

// Animation

function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.r > w || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > h || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let circlesArray = [];

for (let i = 0; i < 100; i++) {
  let r = i + 0.5;

  let x = Math.random() * (w - 2 * r) + r;
  let y = Math.random() * (h - 2 * r) + r;

  let dx = (Math.random() - 0.8) * 3;
  let dy = (Math.random() - 0.8) * 3;

  let circle = new Circle(x, y, dx, dy, r);

  circlesArray.push(circle);
}

function animateCanvas() {
  requestAnimationFrame(animateCanvas);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circlesArray.forEach((circle) => circle.update());
}

animateCanvas();
