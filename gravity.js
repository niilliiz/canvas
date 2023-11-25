// noinspection DuplicatedCode
import { randomColor, randomIntFromRange } from "./utils.js";

let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");
// interacting
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colorArray = [
  "#ff5544",
  "#1B5583",
  "#CAC4B0",
  "#B44C43",
  "#F5D033",
  "#705335",
  "#ff0099",
];

let gravity = 1;
let friction = 0.95;
let radius = 30;

/* -------------------Event Listeners------------------- */

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}
window.addEventListener("click", handleClick);

function handleClick() {
  init();
}

window.addEventListener("resize", handleResizeWindow);

function handleResizeWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
}

function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  };

  this.update = function () {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (
      this.x - this.radius <= 0 ||
      this.x + this.radius + this.dx > canvas.width
    ) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let ballArray = [];

// Implementation
function init() {
  ballArray = [];
  for (let i = 0; i < 400; i++) {
    let r = randomIntFromRange(10, 20);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(0, canvas.height - radius);
    let dx = randomIntFromRange(-2, 2);
    let dy = randomIntFromRange(-2, 2);
    let color = randomColor(colorArray);
    let ball = new Ball(x, y, dx, dy, r, color);
    ballArray.push(ball);
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  ballArray.forEach((ball) => ball.update());
}

init();
animate();
