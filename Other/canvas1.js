var canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 100, 65);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.strokeStyle = "#e74c3c";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 150);
ctx.strokeStyle = "#16a085";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#2980b9";
ctx.stroke();
ctx.closePath();

const getNumber = (max, min) => Math.floor(Math.random() * (max - min) + min);

const colors = ["#ff3d00", "#0bdd38", "#2e77da", "#ffd200"];

let w = 100;
h = 100;

let x = [10, 10, 120, 120],
  y = [10, 120, 10, 120];

colors.forEach((el, i) => {
  ctx.fillStyle = el;
  ctx.fillRect(y[i], x[i], w, h);
});

let radius = 2;

for (; radius <= 100; radius += 2) {
  ctx.beginPath();
  ctx.strokeStyle = getColor();
  ctx.arc(150, 150, radius, 0, 360);

  ctx.stroke();
}

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.strokeStyle = getColor();
  ctx.arc(x, y, getNumber(101, 2), 0, 2 * Math.PI);
  ctx.stroke();
};

document.addEventListener("mousemove", function (e) {
  drawCircle(e.offsetX, e.offsetY, ctx);
});
