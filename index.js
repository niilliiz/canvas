let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");

c.fillRect(150, 300, 200, 45);
c.strokeRect(450, 200, 200, 45);
c.clearRect(250, 250, 100, 150);
