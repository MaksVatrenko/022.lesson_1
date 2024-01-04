import { add } from './add.js';
import { sub } from './sub.js';
import { div } from './div.js';
import { mult } from './mult.js';

class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return add(this.x, this.y);
    }

    sub() {
        return sub(this.x, this.y);
    }

    div() {
        return div(this.x, this.y);
    }

    mult() {
        return mult(this.x, this.y);
    }
}

export default Calculator;