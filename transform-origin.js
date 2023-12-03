let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");

// c.save();

//blue
// c.fillStyle = "#0095dd";
// c.fillRect(30, 30, 100, 100);

// c.rotate((Math.PI / 180) * 25);

//gray
// c.fillStyle = "#4d4e53";
// c.fillRect(30, 30, 100, 100);

// c.restore();

// c.fillStyle = "#0095DD";
// c.fillRect(150, 30, 100, 100);

// c.translate(200, 80); // translate to rectangle center
// x = x + 0.5 * width
// y = y + 0.5 * height
// c.rotate((Math.PI / 180) * 25); // rotate
// c.translate(-200, -80); // translate back

// draw grey rect
// c.fillStyle = "#4D4E53";
// c.fillRect(150, 30, 100, 100);

c.save();

// c.scale(10, 3);
// c.fillStyle = "#9f0";
// c.fillRect(10, 10, 10, 10);
//
// c.restore();
// c.fillStyle = "#45ccdd";
// c.fillRect(100, 30, 200, 30);

// c.font = "48px serif";
// c.fillText("MDN", 200, 200);

c.scale(1, -1);
c.font = "48px serif";
c.fillText("MDN", 200, -200);
