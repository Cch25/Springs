const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startingPoint = 0;
const restLength = canvas.height / 4;
ctx.translate(canvas.width / 2, startingPoint);
const bob = new Particle(0, startingPoint);
const anchor = new Particle(0, restLength);
const spring = new Spring(0.01, 200, bob, anchor);

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left - canvas.width / 2;  
  const y = e.clientY - rect.top - startingPoint;  

  bob.position.set(x, y);
  bob.velocity.set(0, 0);
});

function animate() {
  ctx.clearRect(-canvas.width / 2, 0, canvas.width, canvas.height);

  spring.show();
  spring.update();

  bob.update();
  bob.show();

  anchor.update();
  anchor.show();

  requestAnimationFrame(animate);
}

animate();