function solve(data) {
    return data
        .reduce((res, row, i, arr) => {
            res[0] += row[i];
            res[1] += row[arr.length - i - 1]
            return res;
        }, [0, 0])
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));