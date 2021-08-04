function fight() {
    console.log(`${this.name} slashes at the foe!`);
    this.stamina--;
}

function cast(spell) {
    console.log(`${this.name} casts ${spell}`);
    this.mana--;
}

function fighter(name) {
    return Object.assign(hero(name, 100, 0), { fight });
}

function mage(name) {
    return Object.assign(hero(name, 0, 100), { cast });
}

function hero(name, stamina, mana) {
    return {
        name,
        health: 100,
        stamina,
        mana
    }
}

function solve() {
    return {
        mage,
        fighter
    }
}


const create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
