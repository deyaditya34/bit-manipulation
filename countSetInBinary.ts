import { binaryToDecimal } from "./binaryToDecimal";
import { decimalToBinary } from "./decimalToBinary";

function checkSetInBinary(decimalNumber: number): number {
  let result: number = 0;

  let n = decimalNumber;

  while (n > 0) {
    if ((n & 1) > 0) {
      result++;
    }
    n = n >> 1;

  }

  return result;
}

console.log(checkSetInBinary(235));
