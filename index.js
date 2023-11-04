let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// c.fillStyle = "rgba(50,90,190,0.5)";
// c.fillRect(10, 10, 50, 50);
//
// c.clearRect(15, 20, 90, 30);
//
// c.strokeRect(30, 30, 50, 50);

// Line
// c.beginPath();
// c.moveTo(125, 125);
// c.lineTo(186, 125);
// c.lineTo(186, 155);
// c.lineTo(125, 155);
// c.closePath();
// c.lineTo(125, 125);
// c.stroke();

//ARC || Circle
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    c.beginPath();
    const x = 25 + j * 50; // x coordinate
    const y = 25 + i * 50; // y coordinate
    const radius = 20; // Arc radius
    const startAngle = 2; // Starting point on circle
    const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

    c.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      c.fill();
    } else {
      c.stroke();
    }
  }
}
