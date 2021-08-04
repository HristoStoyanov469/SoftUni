function solve(x) {
    const map = {
        true: (Math.pow(x, 2) * Math.PI).toFixed(2),
        false: `We can not calculate the circle area, because we receive a string.`
    }
    return map[typeof x === 'number'];
}

console.log(solve(5));
console.log(solve('name'));