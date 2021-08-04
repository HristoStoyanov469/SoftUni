function solve(operator, ...params) {
    return params.reduce(
        (x, y) => eval(`${x} ${operator} ${y}`),
        params.shift());
}

console.log(solve('+', 5, 6));
console.log(solve('+', 1, 2, 3, 4));