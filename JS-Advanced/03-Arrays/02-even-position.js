function solve(data) {
    return data
        .filter((_, i) => i % 2 === 0)
        .join(' ');
}

console.log(solve(['20', '30', '40', '50', '60', '70', '80']));