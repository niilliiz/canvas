let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

let offset = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([25, 50, 2]);
  ctx.lineDashOffset = offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 30) {
    offset = 0;
  }
  draw();
  setTimeout(march, 500);
}

march();
