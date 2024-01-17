let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./asset/pattern.jpeg";

img.onload = () => {
  ctx.fillStyle = ctx.createPattern(img, "repeat-y");
  ctx.fillRect(0, 0, 800, 800);
};
