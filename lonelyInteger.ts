/**
Find the unique element in an array using the element "^"
*/

function findUniqueElement(arr: number[]): number {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
  console.log(result.toString(2), arr[i].toString(2));
    result ^= arr[i];
  }

  return result;
}

console.log(findUniqueElement([3, 2, 1, 13, 4, 5, 6, 13, 4, 3,5, 2, 1]));
