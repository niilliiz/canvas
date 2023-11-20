let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let ctx = canvas.getContext("2d");

//Drawing Text
// fillText(text,x,y,[maxWidth])
// strokeText(text,x,y[,maxWidth])

// ctx.font
// ctx.textAlign => _start | end | left | right | center
// ctx.textBaseline => top | hanging | middle | alphabetic | _ideographic | bottom
// ctx.direction => ltr | rtl | _inherit

ctx.font = "48px serif";
ctx.textBaseline = "bottom";
// ctx.fillText("Hello", 50, 50);
ctx.strokeText("Hello", 50, 50);

// measure text
const text = ctx.measureText("hello");

console.log(text);
