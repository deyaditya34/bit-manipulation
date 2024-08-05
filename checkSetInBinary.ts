function checkSetInBinary(decimalNumber: number, i: number): boolean {
  let result = false;

  const binaryNumFromDecimal = decimalNumber.toString(2);

  const setCheckVar = 1 << (i - 1);
  console.log(decimalNumber.toString(2), setCheckVar.toString(2));

  if (decimalNumber & setCheckVar) {
    result = true;
  }

  return result;
}

console.log(checkSetInBinary(245, 3));
