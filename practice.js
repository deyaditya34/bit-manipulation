const { decimalToBinary } = require("./decimalToBinary");
const { binaryToDecimal } = require("./binaryToDecimal");

const a = 0b1000;
const b = 0b1010;
const c = a & b;
console.log(decimalToBinary(a));
// console.log(decimalToBinary(b));
console.log("c", c.toString(2));


// 11101011
// 10101010
// 
// 10101010 
