let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "#ff5";
c.fillRect(0, 0, 75, 75);
c.fillStyle = "#6f8";
c.fillRect(75, 0, 75, 75);
c.fillStyle = "#0cf";
c.fillRect(0, 75, 75, 75);
c.fillStyle = "#d5a";
c.fillRect(75, 75, 75, 75);

c.fillStyle = "#fff";
c.globalAlpha = 0.2;

for (let i = 0; i < 10; i++) {
  c.beginPath();
  c.arc(75, 75, 7 * i, 0, Math.PI * 2, true);
  c.fill();
}
