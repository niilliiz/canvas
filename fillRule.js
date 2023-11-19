let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
ctx.fill("evenodd");
