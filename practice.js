const { decimalToBinary } = require("./decimalToBinary");
const { binaryToDecimal } = require("./binaryToDecimal");

const a = 235;
const b = 236;
const c = a & b;
console.log(decimalToBinary(a));
// console.log(decimalToBinary(b));
console.log("c -", c);

/**
 * 11101011
1 1 1
11 10 10
11 100 0
1011 1000 0
1011 10000 10000
101011 100000 0
1101011 1000000 1000000
11101011 10000000 0
[ { index: 7 }, { index: 6 }, { index: 3 }, { index: 1 } ]
 */

// 11101011
// 11101100
// 11101000

console.log(2**8+2**7+2**6+2**4+1)