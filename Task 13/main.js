import { Rectangle, Square, Circle } from "./shapes.js";
const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.height = 5;
const square = new Square();
square.side = 4;
square.width = 4;
square.height = 4;
const circle = new Circle();
circle.radius = 7;
const shapes = [rectangle, square, circle];
shapes.forEach(shape => {
    console.log(shape.toString());
});

