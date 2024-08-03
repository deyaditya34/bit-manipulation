"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalToBinary = void 0;
function decimalToBinary(number) {
    var tempResult = "";
    var result = "";
    var i = 2;
    var newNumber;
    while (number !== 0) {
        newNumber = Math.floor(number / 2);
        var remainder = number % 2;
        tempResult += remainder;
        number = newNumber;
    }
    for (var i_1 = tempResult.length - 1; i_1 >= 0; i_1--) {
        result += tempResult[i_1];
    }
    return Number(result);
}
exports.decimalToBinary = decimalToBinary;
// console.log(decimalToBinary(55));
