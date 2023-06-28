//Area and perimeter of a circle
let radius = 6.5;

const pi = 3.14159;
const circlePerimeter = 2 * radius * pi;
const circleArea = radius * radius * pi;

console.log(`The perimeter of a circle with a radius of ${radius} is ${circlePerimeter} and the area is ${circleArea}.`);

//Area and perimeter of a rectangle
let width = 5.3;
let height = 8.6;

const rectangleArea = width * height;
const rectanglePerimeter = 2 * (width + height);

console.log(`The perimeter of a rectangle with a width of ${width} and a height of ${height} is ${rectanglePerimeter} and the area is ${rectangleArea}.`);

//Convert mile to kilometer
const input = require('readline-sync');

let info = input.question("Please enter the miles to convert: ");
let mile = info;
let kilometer = 1.6 * mile;

console.log(`${mile} miles is ${kilometer} kilometers.`);
