// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference(diameter) {
    return pi * diameter;
  }
  //
  // get area() {
  //   return `pi * ${this.radius} * 2`;
  // }

  set diameter(diameter) {
    return this.radius * 2
  }
  //
  set circumference(diameter) {
    return pi * diameter;
  }
  //
  // set area() {
  //   return `pi * ${this.radius} * 2`;
  // }
}
