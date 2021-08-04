const actions = {
    add: (a, x) => [...a, x],
    remove: (a, x) => a.filter(y => y !== x),
    print: (a, _) => console.log(a.join(', '))
}

function solve(input) {
    let arr = [];
    input
        .map(x => x.split(' '))
        .forEach(([cmd, params]) => { arr = actions[cmd](arr, params) })
}

solve([
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'
])