export function binaryToDecimal(binaryNumber: number): number {
  let result: number = 0;

  let binaryNumberString: string = binaryNumber.toString();

  for (let i = binaryNumberString.length - 1; i >= 0; i--) {
    result +=
      Number(binaryNumberString[i]) * 2 ** (binaryNumberString.length - 1 - i);
  }

  return result;
}

// console.log(binaryToDecimal(110111));
