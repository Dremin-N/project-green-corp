const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100;

function generateDecimalBetween(left, right) {
  return (Math.random() * (left - right) + right).toFixed(2);
}
class Bubble {
  constructor(canvas) {
    this.canvas = canvas;

    this.getCanvasSize();
    this.init();
  }

  getCanvasSize() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }

  init() {
    this.color = COLORS[Math.floor(Math.random() * (COLORS.length - 1))];
    this.size = Math.floor(Math.random() * (3 - 1) + 1);
    this.alpha = Math.floor(Math.random() * (10 - 5) + 5) / 10;
    this.translateX = Math.floor(Math.random() * this.canvasWidth);
    this.translateY = Math.floor(Math.random() * this.canvasHeight);
    this.speed = generateDecimalBetween(40, 60);
    this.movementX = generateDecimalBetween(-2, 2) / this.speed;
    this.movementY = generateDecimalBetween(1, 20) / this.speed;
  }

  move() {
    this.translateX = this.translateX - this.movementX;
    this.translateY = this.translateY - this.movementY;

    if (
      this.translateX < 0 ||
      this.translateX > this.canvasWidth ||
      this.translateY < 0
    ) {
      this.init();
      this.translateY = this.canvasHeight;
    }
  }
}

class CanvasBackground {
  constructor(id) {
    this.canvas = document.getElementById("orb-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.dpr = window.devicePixelRatio;
  }

  start() {
    this.canvasSize();
    this.generateBubbles();
    this.animate();
  }

  canvasSize() {
    this.width = this.canvas.offsetWidth * this.dpr;
    this.height = this.canvas.offsetHeight * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  generateBubbles() {
    this.bubbleList = [];
    for (let i = BUBBLE_DENSITY; i > 0; i--) {
      this.bubbleList.push(new Bubble(this.canvas));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    this.bubbleList.forEach((bubble) => {
      bubble.move();
      this.ctx.translate(bubble.translateX, bubble.translateY);
      this.ctx.beginPath();
      this.ctx.arc(0, 0, bubble.size, 0, 2 * Math.PI);
      this.ctx.fillStyle = `rgba(${bubble.color},${bubble.alpha})`;
      this.ctx.fill();
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}

const anime = new CanvasBackground("orb-canvas");

anime.start();
