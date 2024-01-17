// noinspection DuplicatedCode
import {
  getDistance,
  randomColor,
  randomIntFromRange,
  resolveCollision,
} from "../utils/utils.js";

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

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5,
  };
  this.radius = radius;
  this.color = color;
  this.mass = 1;
  this.opacity = 0;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.save();
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
    c.restore();
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  };

  this.update = function (particles) {
    this.draw();

    for (let i = 0; i < particles.length; i++) {
      if (this === particles[i]) {
        continue;
      }

      if (
        getDistance(this.x, this.y, particles[i].x, particles[i].y) <
        2 * this.radius
      ) {
        resolveCollision(this, particles[i]);
      }
    }

    // detecting if particle hit the edges
    if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
      this.velocity.y = -this.velocity.y;
    }

    //  mouse collision detection
    if (
      getDistance(mouse.x, mouse.y, this.x, this.y) < 120 &&
      this.opacity < 0.2
    ) {
      this.opacity += 0.02;
    } else if (this.opacity > 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0, this.opacity);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
}

// Implementation

let particles = null;
function init() {
  particles = [];
  for (let i = 0; i < 250; i++) {
    const radius = 15;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = randomColor(colorArray);

    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (getDistance(x, y, particles[j].x, particles[j].y) < 2 * radius) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    particles.push(new Particle(x, y, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => particle.update(particles));
}

init();
animate();
