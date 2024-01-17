let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;

ctx.shadowColor = "rgba(0,0,0,0.5)";
ctx.font = "20px Times New Roman";
ctx.fillStyle = "Black";
ctx.fillText("Sample String", 150, 150);
