function xor_queries_subarray(arr, queries) {
    var result = [];
    var itemZor = 0;
    for (var i = 0; i < queries.length; i++) {
        console.log(queries[i]);
        for (var k = queries[i][0]; k <= queries[i][1]; k++) {
            itemZor = itemZor ^ arr[k];
        }
        result.push(itemZor);
        itemZor = 0;
    }
    return result;
}
console.log(xor_queries_subarray([1, 3, 4, 8], [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
]));
