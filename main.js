const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.translate(canvas.width / 2, 0);
const particles = [];
const springs = [];
const spacing = 15;
const nbrPoints = 10;
const k = 0.1;
const gravity = createVector(0, 0.5);

function init() {
  for (let i = 0; i < nbrPoints; i++) {
    particles[i] = new Particle(0, i * spacing);
    if (i > 0) {
      const a = particles[i - 1];
      const b = particles[i];
      springs.push(new Spring(k, spacing, a, b));
    }
    particles[0].locked = true;
  }
}

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left - canvas.width / 2;
  const y = e.clientY - rect.top;
  const head = particles[0];
  const tail = particles[particles.length - 1];
  tail.position.set(x, y);
  head.velocity.set(0, 0);
});

function animate() {
  ctx.clearRect(-canvas.width / 2, 0, canvas.width, canvas.height);

  for (let s of springs) {
    s.update();
  }

  ctx.beginPath();

  const head = particles[0];
  ctx.moveTo(head.position.x, head.position.y);

  for (let i = 0; i < particles.length - 1; i++) {
    const p1 = particles[i].position;
    const p2 = particles[i + 1].position;
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    if (i > 0) {
      particles[i].applyForce(gravity);
      particles[i].update();
    }

    ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
  }
  ctx.stroke();

  const tail = particles[particles.length - 1];
  tail.update();
  tail.show();

  requestAnimationFrame(animate);
}

init();
animate();
