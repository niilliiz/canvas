// noinspection DuplicatedCode
import { getDistance } from "../utils/utils";

let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");
// interacting
let mouse = {
  x: 10,
  y: 10,
};

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

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  this.update = function () {
    this.draw();
  };
}

// Implementation

let circle1 = null;
let circle2 = null;
function init() {
  circle1 = new Circle(300, 300, 100, "black");
  circle2 = new Circle(10, 10, 30, "red");
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();

  if (
    getDistance(circle1.x, circle1.y, circle2.x, circle2.y) <
    circle1.radius + circle2.radius
  ) {
    circle1.color = "red";
  } else {
    circle1.color = "black";
  }
}

init();
animate();
