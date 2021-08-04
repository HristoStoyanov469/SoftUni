function createElement(type, content) {
    let e = document.createElement(type);
    e.innerHTML = content;
    return e;
}

function addItem(callback, value) {
    if (value !== "") {
        callback(createElement("li", value))
    }
}
function addToHTML(parent, child) {
    parent.appendChild(child);
}

function clickHandler(callback, input) {
    addItem(callback, input.value);
}

function main() {

    const cta = document.getElementById("addCTA");
    const list = document.getElementById("items");
    const input = document.getElementById("newItemText");
    if (cta === null || list === null || input === null) {
        throw new Error("Oppsie!!!");
    }

    const boundClickHandler = clickHandler.bind(undefined, addToHTML.bind(undefined, list), input);

    cta.addEventListener("click", boundClickHandler);
}

document.addEventListener("DOMContentLoaded", main());