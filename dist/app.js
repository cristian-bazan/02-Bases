"use strict";
// const {getAge, getUUID} = require('./plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = getSum;
function getSum(a, b) {
    if (a == b) {
        return a;
    }
    return a + b;
}
;
console.log(getSum(1, 1));
