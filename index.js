// Assignment:
//
//     Create a module (using npm init or through JavaScript modules).
//     Implement a module named "calculator".
//     Each operation function (add, sub, div, mult) should be in a separate file.

import { x, y } from './components/constants.js';
import Calculator from './components/calculator.js';

const calc = new Calculator(x, y);

console.log(calc.add());
console.log(calc.sub());
console.log(calc.div());
console.log(calc.mult());