import {
  getDistance,
  randomIntFromRange,
  resolveCollision,
} from "./utils/utils.js";

let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

const imageSources = [
  { src: "./asset/1.png", width: 255, height: 255 },
  { src: "./asset/2.png", width: 120, height: 380 },
  { src: "./asset/7.png", width: 120, height: 362 },
  { src: "./asset/8.png", width: 123, height: 422 },
  { src: "./asset/10.png", width: 283, height: 280 },
  { src: "./asset/12.png", width: 326, height: 257 },
  { src: "./asset/16.png", width: 250, height: 250 },
  { src: "./asset/18.png", width: 250, height: 220 },
  { src: "./asset/19.png", width: 259, height: 179 },
];

function Shape(img, x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = img;
  this.mass = 1;
  this.velocity = {
    x: (Math.random() - 0.5) * 0.4,
    y: (Math.random() - 0.5) * 0.4,
  };

  this.draw = function () {
    c.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  this.update = function (shapes) {
    this.draw();

    for (let i = 0; i < shapes.length; i++) {
      if (this === shapesList[i]) {
        continue;
      }

      // detect if shapes hit each other
      if (
        this.x + this.w >= shapes[i].x &&
        this.x <= shapes[i].x + shapes[i].w &&
        this.y + this.h >= shapes[i].y &&
        this.y <= shapes[i].y + shapes[i].h
      ) {
        resolveCollision(this, shapes[i]);
      }

      // detect if they hit the edges
      if (this.x <= 0 || this.x + this.w >= canvas.width) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y <= 0 || this.y + this.h >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  };
}

const images = [];
let loadedImages = 0;
function loadImage(src) {
  const img = new Image();

  img.src = src;
  img.onload = () => {
    loadedImages++;
    if (loadedImages === imageSources.length) {
      animate();
    }
  };

  return img;
}

for (const img of imageSources) {
  images.push(loadImage(img.src));
}

function update(img) {}

let shapesList = null;
function initImage() {
  shapesList = [];
  for (let i = 0; i < images.length; i++) {
    let x = randomIntFromRange(
      imageSources[i].width,
      canvas.width - imageSources[i].width,
    );
    let y = randomIntFromRange(
      imageSources[i].height,
      canvas.height - imageSources[i].height,
    );

    let w = imageSources[i].width;
    let h = imageSources[i].height;

    if (i !== 0) {
      for (let j = 0; j < shapesList.length; j++) {
        if (
          x + w >= shapesList[j].x &&
          x <= shapesList[j].x + shapesList[j].w &&
          y + h >= shapesList[j].y &&
          y <= shapesList[j].y + shapesList[j].h
        ) {
          x = randomIntFromRange(
            imageSources[i].width,
            canvas.width - imageSources[i].width,
          );
          y = randomIntFromRange(
            imageSources[i].height,
            canvas.height - imageSources[i].height,
          );
          j = -1;
        }
      }
    }

    shapesList.push(new Shape(images[i], x, y, w, h));
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  shapesList.forEach((shape) => shape.update(shapesList));
}

initImage();
animate();
