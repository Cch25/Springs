class Spring {
  constructor(k, restLength, a, b) {
    this.k = k;
    this.restLength = restLength;
    this.a = a;
    this.b = b;
  }

  update() {
    const force = Vector.sub(this.b.position, this.a.position);
    const x = force.mag() - this.restLength;
    force.normalize();
    force.mult(this.k * x);
    this.a.applyForce(force);
    force.mult(-1);
    this.b.applyForce(force);
  }

  show() {
    ctx.beginPath();
    ctx.moveTo(this.a.position.x, this.a.position.y);
    ctx.lineTo(this.b.position.x, this.b.position.y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}
