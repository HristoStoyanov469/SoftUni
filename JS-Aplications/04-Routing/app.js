const app_state = { count: 0 }
const app_root = 'http://127.0.0.1:5500'
const routesParams = {}
const routes = {}

function page1(page, temp) {
    document.getElementById('content').innerHTML = `<b>Link1</b> is was pressed => page ${page} | temp: ${temp}`
}

function page2() {
    document.getElementById('content').innerHTML = `<b>Link2</b>`
}

function createPath(path, callback) {

    const processedPath = path.split(':');
    const realPath = processedPath.splice(0, 1);

    routes[realPath] = callback;
    routesParams[realPath] = processedPath;
}

createPath('/link1:page:temp', page1);
createPath('/link2', page2);


function main(e) {
    if (e.target.dataset.myLink === '1') {
        e.preventDefault();
        router(e.target.href)
    }
}

document.addEventListener('click', main);
window.addEventListener('load', function (e) {
    router(location.href)
});

function router(href) {
    history.pushState({ count: app_state.count++ }, '', href)
    
    const q = [...new URLSearchParams(location.search).entries()]
        .filter(x => routesParams[location.pathname].indexof(x[0]) > -1)
        .map(x => x[1])

    if (typeof routes[location.pathname] === 'function') {
        routes[location.pathname](...q)
    }
}
