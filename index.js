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
// const linear = ctx.createLinearGradient(50, 50, 550, 550);
// linear.addColorStop(0, "#45ff55");
// linear.addColorStop(0.25, "#55ffdd");
// linear.addColorStop(0.5, "#cc55ff");
// linear.addColorStop(0.5, "#ff5544");
// linear.addColorStop(0.75, "#60cd95");
// linear.addColorStop(1, "#0044ff");
//
// const linear2 = ctx.createLinearGradient(100, 100, 550, 550);
// linear2.addColorStop(0.5, "#1055ff");
// linear2.addColorStop(1, "#aa5500");
//
// ctx.strokeStyle = linear2;
// ctx.fillStyle = linear;
//
// ctx.fillRect(50, 50, 500, 500);
// ctx.strokeRect(50, 50, 500, 500);

// RADIAL
// const radial = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
// radial.addColorStop(0, "#A7D30C");
// radial.addColorStop(0.9, "#019F62");
// radial.addColorStop(1, "rgba(1, 159, 98, 0)");
//
// const radial2 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
// radial2.addColorStop(0, "#00C9FF");
// radial2.addColorStop(0.8, "#00B5E2");
// radial2.addColorStop(1, "rgba(0, 201, 255, 0)");
//
// const radial3 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
// radial3.addColorStop(0, "#F4F201");
// radial3.addColorStop(0.8, "#E4C700");
// radial3.addColorStop(1, "rgba(0, 201, 255, 0)");
//
// const radial4 = ctx.createRadialGradient(150, 150, 20, 160, 155, 45);
// radial4.addColorStop(0, "#FF5F98");
// radial4.addColorStop(0.75, "#FF0188");
// radial4.addColorStop(1, "rgba(255, 1, 136, 0)");
//
// ctx.fillStyle = radial2;
// ctx.fillRect(0, 0, 150, 150);
//
// ctx.fillStyle = radial;
// ctx.fillRect(0, 0, 150, 150);
//
// ctx.fillStyle = radial4;
// ctx.fillRect(0, 0, 195, 190);
//
// ctx.fillStyle = radial3;
// ctx.fillRect(0, 0, 120, 250);
