function createVector(x, y) {
  return new Vector(x, y);
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static sub(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  mag() {
    return Math.hypot(this.x, this.y);
  }

  normalize() {
    const magnitude = this.mag();
    if (magnitude === 0) {
      throw new Error("Cannot normalize a zero vector.");
    }
    this.x /= magnitude;
    this.y /= magnitude;
    return this;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  div(n) {
    this.x /= n;
    this.y /= n;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  mult(vector) {
    this.x *= vector;
    this.y *= vector;
  }
}
