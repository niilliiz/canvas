let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

//GRADIENT

// createLinearGradient(x1, y1, x2, y2)
// createRadialGradient(x1, y1, r1, x2, y2, r2)
// createConicGradient(angle, x, y)

// const radial = ctx.createRadialGradient(650, 750, 30, 950, 950, 45);

// LINEAR
const linear = ctx.createLinearGradient(50, 50, 550, 550);
linear.addColorStop(0, "#45ff55");
linear.addColorStop(0.25, "#55ffdd");
linear.addColorStop(0.5, "#cc55ff");
linear.addColorStop(0.5, "#ff5544");
linear.addColorStop(0.75, "#60cd95");
linear.addColorStop(1, "#0044ff");

const linear2 = ctx.createLinearGradient(100, 100, 550, 550);
linear2.addColorStop(0.5, "#1055ff");
linear2.addColorStop(1, "#aa5500");

ctx.strokeStyle = linear2;
ctx.fillStyle = linear;

ctx.fillRect(50, 50, 500, 500);
ctx.strokeRect(50, 50, 500, 500);
