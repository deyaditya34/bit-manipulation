function checkSetInBinary(decimalNumber, i) {
    var result = false;
    var binaryNumFromDecimal = decimalNumber.toString(2);
    var setCheckVar = 1 << i - 1;
    console.log(decimalNumber.toString(2), setCheckVar.toString(2));
    if (decimalNumber & setCheckVar) {
        result = true;
    }
    return result;
}
console.log(checkSetInBinary(245, 3));
