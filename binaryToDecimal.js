"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryToDecimal = binaryToDecimal;
function binaryToDecimal(binaryNumber) {
    var result = 0;
    var binaryNumberString = binaryNumber.toString();
    for (var i = binaryNumberString.length - 1; i >= 0; i--) {
        result +=
            Number(binaryNumberString[i]) * Math.pow(2, (binaryNumberString.length - 1 - i));
    }
    return result;
}
// console.log(binaryToDecimal(110111));
