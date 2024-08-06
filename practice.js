const { decimalToBinary } = require("./decimalToBinary");
const { binaryToDecimal } = require("./binaryToDecimal");

const a = 0b00;
let b = 0b10;
const d = 0b0110;
 c = a | b;
console.log(decimalToBinary(a));
console.log(decimalToBinary(b));
console.log("c -", decimalToBinary(c));

// [3, 2, 1, 13, 4, 5, 6, 13, 4, 3,5, 2, 1]

/**
11 ^ 0 = 11
11 ^ 10 = 01
01 ^ 01 = 0
1101 ^ 0000 = 1101
1101 ^ 100 = 1001
1001 ^ 101 = 1100
1100 ^ 110 = 1010
1010 ^ 1101 = 0111
0111 ^ 100 = 0011
0011 ^ 0011 = 0
0 ^ 101 = 101
101 ^ 010 = 111
111 ^ 001 = 110
*/