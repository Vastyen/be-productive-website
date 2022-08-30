window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas5");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const mouse = {
    x2: null,
    y2: null,
    radius: 100,
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x2 = event.clientX;
    mouse.y2 = event.clientY;
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  let particleArray = [];
  const numOfParticles = 11;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = 10;
      this.ranY = Math.random() * 6 + 4;
      this.alpha = Math.random() * 0.2;
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = `rgb(175,195,204, ${this.alpha})`;
      ctx.moveTo(this.x - 2, this.y);
      ctx.lineTo(this.x, this.y - 20);
      ctx.lineTo(this.x + 2, this.y);
      ctx.arc(this.x, this.y, 2, 0, Math.PI);
      ctx.closePath();
      ctx.fill();
    }
    update() {
        this.y += this.ranY + Math.random() * 1;
        if (this.y > canvas.height) {
          this.y = 0;
        }
        
    }
  }

  function init() {
    for (let i = 0; i < numOfParticles; i++) {
      particleArray.push(new Particle());
    }
  }

  function animate() {
    //ctx.globalAlpha = 0.05;
    ctx.fillStyle = "rgb(23, 23, 23)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
      particleArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  init();
  animate();
});

