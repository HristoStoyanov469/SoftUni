function addMissing(a, b) {
    if (typeof a[b] === 'undefined') a[b] = 0;
    return a;
}

function solve([data]) {
    return data
        .match(/\w+/gim)
        .reduce((a, b) => {
            addMissing(a, b);
            a[b]++
            return a;
        }, {})
}

console.log(
    solve(['JS devs use Node.js for server-side JS.-- JS for devs'])
);