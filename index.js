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

const linear=ctx.createLinearGradient(150,250,550,850)