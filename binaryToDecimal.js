function binaryToDecimal(binaryNumber) {
    var result = 0;
    var binaryNumberString = binaryNumber.toString(2);
    for (var i = 0; i < binaryNumberString.length; i++) {
        result += Number(binaryNumberString[i]) * Math.pow(2, i);
    }
    return result;
}
console.log(binaryToDecimal(11011));
