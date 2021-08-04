import { contacts } from "./contacts.js";

function compile(str) {
    return function (data) {
        return data.map(x => {
            let res = str
            Object.keys(x)
                .forEach(y => {
                    res = res.replace(`{{${y}}}`, x[y])
                });
            return res;
        }).join('')
    }
}

async function main() {
    const template = await fetch('/template.hbs').then(x => x.text());

    const templateFN = compile(template);

    document.getElementById('contacts').innerHTML = templateFN(contacts);
}
main()