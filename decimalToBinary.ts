export function decimalToBinary(number: number): number {
  let tempResult: string = "";
  let result: string = "";

  let i: number = 2;
  let newNumber: number;
  
  while (number !== 0) {
    newNumber = Math.floor(number / 2);

    let remainder: number = number % 2;
    tempResult += remainder;

    console.log(number, newNumber, remainder)
    number = newNumber;
  }

  for (let i = tempResult.length - 1; i >= 0; i--) {
    result += tempResult[i]
  }

  return Number(result)
}

console.log(decimalToBinary(24));

function binaryToDecimal(number: number): number {
  let tempResult: string = "";
  let result: string = "";

  let i: number = 10;
  let newNumber: number;
  
  while (number !== 0) {
    newNumber = Math.floor(number / 10);

    let remainder: number = number % 10;
    tempResult += remainder;

    console.log(number, newNumber, remainder)
    number = newNumber;
  }

  for (let i = tempResult.length - 1; i >= 0; i--) {
    result += tempResult[i]
  }

  return Number(result)
}

console.log(binaryToDecimal(101010));