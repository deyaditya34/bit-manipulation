"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decimalToBinary_1 = require("./decimalToBinary");
function checkSetInBinary(decimalNumber) {
    var result = [];
    var binNumFrDecString = (0, decimalToBinary_1.decimalToBinary)(decimalNumber).toString();
    var binNumFrDecStringLength = binNumFrDecString.length;
    console.log(binNumFrDecString);
    var setChecker = 1;
    for (var i = binNumFrDecStringLength; i > 0; i--) {
        var binaryNumberSelect = Number(binNumFrDecString.slice(i - 1, binNumFrDecStringLength));
        var tempValue = binaryNumberSelect & setChecker;
        console.log(binaryNumberSelect, Number(setChecker.toString(2)), tempValue.toString(2));
        if (tempValue > 0) {
            result.push({ index: binNumFrDecStringLength - i - 1 });
        }
        setChecker = setChecker << 1;
    }
    return result;
}
console.log(checkSetInBinary(235));
