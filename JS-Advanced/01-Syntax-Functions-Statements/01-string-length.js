function solve(...params) {
    let sum = params.reduce((a, b) => a + b.length, 0);
    let avrg = Math.floor(sum / params.length);

    return [sum, avrg];
}

console.log(solve("chocolate", "ice cream", "cake"));

