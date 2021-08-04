function extrctKeys(params) {
    return params
        .split('|')
        .filter(x => x !== '')
        .map(x => x.trim())
        .map(x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x)
}
function solve(data) {
    let keys = extrctKeys(data[0]);

    return data
        .splice(1)
        .map(extrctKeys)
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
        }, {}))
}

console.log(
    solve([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]));