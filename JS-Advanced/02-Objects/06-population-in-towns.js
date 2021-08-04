function solve(data) {
    return data
        .map(x => x.split(' <-> '))
        .reduce((res, [t, p]) => {
            typeof res[t] === 'undefined' ? res[t] = +p : res[t] += +p
            return res;
        }, {})

}

console.log(solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000',
]));