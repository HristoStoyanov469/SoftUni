function solve(data) {
    return data.reduce((a, b, i) => {
        if (isNaN(b)) {
            a.hasOwnProperty(b) ? a[b] += +data[i + 1] : a[b] = +data[i + 1];
        }
        return a;
    }, {})
}

console.log(solve([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
]));

console.log(solve([
    'Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']
));