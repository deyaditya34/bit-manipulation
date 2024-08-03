function binaryToDecimal(binaryNumber: number): number {
  let result: number = 0;

  let binaryNumberString: string = binaryNumber.toString(2);

  for (let i = 0; i < binaryNumberString.length; i++) {
    result += Number(binaryNumberString[i]) * 2 ** i;
  }

  return result;
}

console.log(binaryToDecimal(11011))
