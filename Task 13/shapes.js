export class Shape {
    name = "Shape";
    getArea() {
        return 0;
    }
    getPerimeter() {
        return 0;
    }
    toString() {
        return `${this.name} -> Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
    }
}
export class Rectangle extends Shape {
    name = "Rectangle";
    width = 0;
    height = 0;
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
export class Square extends Rectangle {
    name = "Square";
    side = 0;
}
export class Circle extends Shape {
    name = "Circle";
    radius = 0;
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}