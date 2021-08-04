function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  if (input === null || output === null) {
    throw new Error("Ooopsie");
  }

  input.innerHTML
    .split(".")
    .filter(x => x !== "")
    .forEach(e => {
      let p = document.createElement("p");
      p.innerHTML = e + ".";
      output.appendChild(p);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("formatItBtn")
    .addEventListener("click", solve);
})