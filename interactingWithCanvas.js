let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");
// interacting
let mouse = {
  x: undefined,
  y: undefined,
};

const maxRadius = 80;
const colorArray = [
  "#ff5544",
  "#1B5583",
  "#CAC4B0",
  "#B44C43",
  "#F5D033",
  "#705335",
  "#ff0099",
];

// Animation

function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.minR = r;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
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

    // interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.r < maxRadius) {
        this.r += 1;
      }
    } else if (this.r > this.minR) {
      this.r -= 1;
    }
    this.draw();
  };
}

let circlesArray = [];
function animateCanvas() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  circlesArray.forEach((circle) => circle.update());

  requestAnimationFrame(animateCanvas);
}

/* -------------------Interacting with CANVAS------------------- */

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}

window.addEventListener("resize", handleResizeWindow);

function handleResizeWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
}

function init() {
  circlesArray = [];
  for (let i = 0; i < 800; i++) {
    let r = Math.random() * 10 + 1;

    let x = Math.random() * (w - 2 * r) + r;
    let y = Math.random() * (h - 2 * r) + r;

    let dx = (Math.random() - 0.8) * 3;
    let dy = (Math.random() - 0.8) * 3;

    let circle = new Circle(x, y, dx, dy, r);

    circlesArray.push(circle);
  }
}

animateCanvas();
init();
