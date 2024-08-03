"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decimalToBinary_1 = require("./decimalToBinary");
var binaryToDecimal_1 = require("./binaryToDecimal");
function shiftRight(decimalNumber) {
    var binaryFromDecimal = (0, decimalToBinary_1.decimalToBinary)(decimalNumber);
    var binaryString = binaryFromDecimal.toString();
    var newBinaryNumber = Number(binaryString.slice(0, binaryString.length - 1));
    var result = (0, binaryToDecimal_1.binaryToDecimal)(newBinaryNumber);
    return result;
}
console.log(shiftRight(56));
function shiftLeft(decimalNumber) {
    var binaryFromDecimal = (0, decimalToBinary_1.decimalToBinary)(decimalNumber);
    var binaryString = binaryFromDecimal.toString();
    var newBinaryNumber = Number((binaryString += 0));
    var result = (0, binaryToDecimal_1.binaryToDecimal)(newBinaryNumber);
    return result;
}
console.log(shiftLeft(28));
