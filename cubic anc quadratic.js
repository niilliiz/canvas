let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");
// Quadratic curves example
c.beginPath();
c.moveTo(75, 25);
c.quadraticCurveTo(25, 25, 25, 62.5);
c.quadraticCurveTo(25, 100, 50, 100);
c.quadraticCurveTo(50, 120, 30, 125);
c.quadraticCurveTo(60, 120, 65, 100);
c.quadraticCurveTo(125, 100, 125, 62.5);
c.quadraticCurveTo(125, 25, 75, 25);
c.stroke();
