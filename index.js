// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return pi * (this.radius * 2)
  }
  //
  get area() {
    return pi * (this.radius * this.radius)
  }

  set diameter(diameter) {
    this.diameter = diamter;
  }
  //
  set circumference(diameter) {
    return pi * diameter;
  }
  //
  // set area() {
  //   // return pi * (this.radius * this.radius)
  // }
}
