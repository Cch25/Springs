class Particle {
  constructor(x, y) {
    this.locked = false;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(x, y);
    this.mass = 1; //Math.random() > .5 ? 1: 3;
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    if (!this.locked) {
      this.velocity.mult(0.95); //damping
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  }

  show() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 20 * this.mass, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(45, 197, 244)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}
