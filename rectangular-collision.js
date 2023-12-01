// noinspection DuplicatedCode
import {
  getDistance,
  randomColor,
  randomIntFromRange,
  resolveCollision,
} from "./utils/utils.js";

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

/* -------------------Event Listeners------------------- */

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}

function Rect(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;

  this.draw = function () {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
  };
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  const board = new Rect(0, 0, canvas.width, canvas.height, "#1a1a23");
  board.draw();

  const rect1 = new Rect(mouse.x, mouse.y, 100, 100, "#e86262");
  rect1.draw();

  const rect2 = new Rect(
    canvas.width / 2 - 50,
    canvas.height / 2 - 50,
    100,
    100,
    "#92abea",
  );
  rect2.draw();

  if (
    rect1.x + rect1.w >= rect2.x &&
    rect1.x <= rect2.x + rect2.w &&
    rect1.y + rect1.h >= rect2.y &&
    rect1.y <= rect2.y + rect2.h
  ) {
    console.log("colliding");
  }
}

animate();
