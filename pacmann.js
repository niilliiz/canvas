let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth;
let h = window.innerHeight;

let c = canvas.getContext("2d");

function generateRoundedRect(ctx, x, y, width, height, r) {
  const LeftTop = { x, y };
  const LeftBottom = { x, y: y + height };

  const TopLeft = { x: x + r, y: y - r };
  const TOPRight = { x: x + r + width, y: y - r };

  const RightTop = { x: x + r * 2 + width, y: y };
  const RightBottom = { x: x + r * 2 + width, y: y + height };

  const BottomRight = { x: x + r + width, y: y + r + height };
  const BottomLeft = { x: x + r, y: y + r + height };

  ctx.beginPath();
  ctx.lineTo(LeftTop.x, LeftTop.y);
  ctx.quadraticCurveTo(x, y - r, TopLeft.x, TopLeft.y);
  ctx.lineTo(TOPRight.x, TOPRight.y);
  ctx.quadraticCurveTo(TOPRight.x + r, TOPRight.y, RightTop.x, RightTop.y);
  ctx.lineTo(RightBottom.x, RightBottom.y);
  ctx.quadraticCurveTo(
    RightBottom.x,
    RightBottom.y + r,
    BottomRight.x,
    BottomRight.y,
  );
  ctx.lineTo(BottomLeft.x, BottomLeft.y);
  ctx.quadraticCurveTo(x, BottomLeft.y, LeftBottom.x, LeftBottom.y);
  ctx.closePath();
  ctx.stroke();
}

// 2 nesting rounded rect
generateRoundedRect(c, 200, 200, 600, 300, 25);
generateRoundedRect(c, 210, 210, 580, 280, 25);

//PAC-Man

function generatePackMan(ctx, x, y, r, startAngle, endAngle) {
  const cx = x + r;
  const cy = y + r;

  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, endAngle, false);
  ctx.lineTo(cx, cy);
  ctx.fill();
}

generatePackMan(c, 220, 200, 25, Math.PI / 4, (7 * Math.PI) / 4);

// HUNTER
function generateHunter(ctx, x, y, r, startAngle, endAngle, isClockWise) {
  const height = 40;
  const unit = r / 3;

  // Body
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - height);
  ctx.quadraticCurveTo(x + r, y - height - 1.4 * r, x + 2 * r, y - height);
  ctx.lineTo(x + 2 * r, y);
  ctx.lineTo(x + 2 * r - unit, y - unit);
  ctx.lineTo(x + 2 * r - 2 * unit, y);
  ctx.lineTo(x + 2 * r - 3 * unit, y - unit);
  ctx.lineTo(x + 2 * r - 4 * unit, y);
  ctx.lineTo(x + 2 * r - 5 * unit, y - unit);
  ctx.lineTo(x + 2 * r - 6 * unit, y);
  ctx.fill();

  // Left Eye
}

generateHunter(c, 500, 350, 30, 0, Math.PI, true);
