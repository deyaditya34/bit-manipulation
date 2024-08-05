import { binaryToDecimal } from "./binaryToDecimal";
import { decimalToBinary } from "./decimalToBinary";

function checkSetInBinary(decimalNumber: number): { index: number }[] {
  const result = [];

  const binNumFrDecString = decimalToBinary(decimalNumber).toString();
  const binNumFrDecStringLength = binNumFrDecString.length;
  console.log(binNumFrDecString)
  let setChecker: number = 1;

  for (let i = binNumFrDecStringLength; i > 0; i--) {
    
    const binaryNumberSelect: number = Number(
      binNumFrDecString.slice(i - 1, binNumFrDecStringLength),
    );
    
    const tempValue: number = binaryNumberSelect & setChecker;
    console.log(binaryNumberSelect, Number(setChecker.toString(2)), tempValue.toString(2));
      
    if (tempValue > 0) {
      result.push({ index: i - 1 });
    }

    setChecker = setChecker << 1;
  }

  return result;
}

console.log(checkSetInBinary(235));
