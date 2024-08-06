function xor_queries_subarray(arr: number[], queries: number[][]): number[] {
  const result: number[] = [];

  let itemZor: number = 0;
  for (let i = 0; i < queries.length; i++) {
    for (let k = queries[i][0]; k <= queries[i][1]; k++) {
      itemZor = itemZor ^ arr[k];
    }
    result.push(itemZor);
    itemZor = 0;
  }

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
