function setIthBitInBinary(decimalNumber, i) {
    var decimalToBinary = decimalNumber.toString(2);
    console.log(decimalToBinary);
    var setCheckVar = 1 << i;
    console.log(setCheckVar.toString(2));
    if ((decimalNumber & setCheckVar) > 0) {
        return "i'th value already set";
    }
    else {
        decimalNumber |= setCheckVar;
    }
    return "item set - ".concat(decimalNumber);
}
console.log(setIthBitInBinary(245, 3));
