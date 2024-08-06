function setIthBitInBinary(decimalNumber: number, i: number): string {
  
  const decimalToBinary: string = decimalNumber.toString(2);
  console.log(decimalToBinary);
  const setCheckVar = 1 << i;
  console.log(setCheckVar.toString(2))
  if ((decimalNumber & setCheckVar) > 0) {
    return "i'th value already set"
  } else {
    decimalNumber |= setCheckVar
  }
  
  return `item set - ${decimalNumber}`
}

console.log(setIthBitInBinary(245, 3))