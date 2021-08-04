const actionsMap = {
    true: "unshift",
    false: "push"
}
function solve(arr) {
    return arr.reduce(
        (res, x) => {
            res[actionsMap[x < 0]](x);
            return res;
        }, []);
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));