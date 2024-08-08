function numberOfFlips(a, b) {
    var count = 0;
    var aToBinaryString = a.toString(2);
    var bToBinaryString = b.toString(2);
    while (a > 0 || b > 0) {
        var byte1 = (a & 1) !== 0;
        var byte2 = (b & 1) !== 0;
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
