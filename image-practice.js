import { getDistance, randomIntFromRange } from "./utils/utils.js";

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

  this.draw = function () {
    c.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  this.update = function () {
    this.draw();
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
    let x = randomIntFromRange(0, canvas.width);
    let y = randomIntFromRange(0, canvas.height);
    let w = imageSources[i].width;
    let h = imageSources[i].height;

    if (i !== 0) {
      for (let j = 0; j < shapesList.length; j++) {
        if (
          x + w > shapesList[j].x &&
          x < shapesList[j].x + shapesList[j].w &&
          y + h > shapesList[j].y &&
          y < shapesList[j].y + shapesList[j].h
        ) {
          x = randomIntFromRange(0, canvas.width);
          y = randomIntFromRange(0, canvas.height);
          j = -1;
        }
      }
    }

    shapesList.push(new Shape(images[i], x, y, w, h));
  }
}
function animate() {
  // requestAnimationFrame(animate);
  // c.clearRect(0, 0, canvas.width, canvas.height);
  shapesList.forEach((shape) => shape.update());
}

console.log(shapesList);

initImage();
