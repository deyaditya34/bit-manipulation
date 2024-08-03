import { decimalToBinary } from "./decimalToBinary";
import { binaryToDecimal } from "./binaryToDecimal";

function shiftRight(decimalNumber: number): number {
  const binaryFromDecimal = decimalToBinary(decimalNumber);

  let binaryString: string = binaryFromDecimal.toString();

  const newBinaryNumber: number = Number(
    binaryString.slice(0, binaryString.length - 1)
  );

  const result: number = binaryToDecimal(newBinaryNumber);

  return result;
}

console.log(shiftRight(56));

function shiftLeft(decimalNumber: number): number {
  const binaryFromDecimal = decimalToBinary(decimalNumber);

  let binaryString: string = binaryFromDecimal.toString();

  const newBinaryNumber: number = Number((binaryString += 0));

  const result: number = binaryToDecimal(newBinaryNumber);

  return result;
}

console.log(shiftLeft(28))