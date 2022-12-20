#!/usr/bin/node
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  get area() {
    return this.width * this.height;
  }
}
