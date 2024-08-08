function numberOfFlips(a: number, b: number): number {
  let count: number = 0;

  const aToBinaryString: string = a.toString(2);
  const bToBinaryString: string = b.toString(2);

  while (a > 0 || b > 0) {
    let byte1: boolean = (a & 1) !== 0;
    let byte2: boolean = (b & 1) !== 0;

    console.log(byte1, byte2, a.toString(2), b.toString(2));
    if (byte1 != byte2) {
      count++;
    }

    a = a >> 1;
    b = b >> 1;
  }

  return count;
}

console.log(numberOfFlips(25, 24));
