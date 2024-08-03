function decimalToBinary(number) {
    var tempResult = "";
    var result = "";
    var i = 2;
    var newNumber;
    while (number !== 0) {
        newNumber = Math.floor(number / 2);
        var remainder = number % 2;
        tempResult += remainder;
        console.log(number, newNumber, remainder);
        number = newNumber;
    }
    for (var i_1 = tempResult.length - 1; i_1 >= 0; i_1--) {
        result += tempResult[i_1];
    }
    return Number(result);
}
console.log(decimalToBinary(24));
function binaryToDecimal(number) {
    var tempResult = "";
    var result = "";
    var i = 10;
    var newNumber;
    while (number !== 0) {
        newNumber = Math.floor(number / 10);
        var remainder = number % 10;
        tempResult += remainder;
        console.log(number, newNumber, remainder);
        number = newNumber;
    }
    for (var i_2 = tempResult.length - 1; i_2 >= 0; i_2--) {
        result += tempResult[i_2];
    }
    return Number(result);
}
console.log(binaryToDecimal(101010));
