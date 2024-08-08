// function xor_queries_subarray(arr: number[], queries: number[][]): number[] {
//   const result: number[] = [];

//   let itemZor: number = 0;
//   for (let i = 0; i < queries.length; i++) {
//     for (let k = queries[i][0]; k <= queries[i][1]; k++) {
//       itemZor = itemZor ^ arr[k];
//     }
//     result.push(itemZor);
//     itemZor = 0;
//   }

//   return result;
// }

function xor_queries_subarray(arr: number[], queries: number[][]): number[] {
  const result: number[] = [];

  let prefix_xor_arr: number[] = [];

  let tempValue: number = 0;
  for (let i = 0; i < arr.length; i++) {
    tempValue ^= arr[i];

    prefix_xor_arr.push(tempValue);
  }

  for (let i = 0; i < queries.length; i++) {
    const itemFrom: number = queries[i][0];
    const itemTo: number = queries[i][1];

    if (itemFrom === 0) {
      result.push(prefix_xor_arr[itemTo]);
    } else {
      result.push(prefix_xor_arr[itemTo] ^ prefix_xor_arr[itemFrom - 1]);
    }
  }

  console.log(prefix_xor_arr);

  return result;
}

console.log(
  xor_queries_subarray(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ],
  ),
);
