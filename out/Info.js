/**
 * @class Info
 * @classdesc A játékos aktuális állapotát és információit megjelenítő osztály.
 */
export default class Info {

    /**
     * @constructor
     * @param {HTMLElement} parent - A szülő DOM elem, ahova az információk kerülnek.
     */
    constructor(parent) {
        this.parent = parent;
    }

    /**
     * Kiírja a játékos aktuális adatait a DOM-ba.
     * @param {Object} jatekos - A játékos objektum.
     * @param {string} jatekos.nev - A játékos neve.
     * @param {number} jatekos.elet - A játékos életereje.
     * @param {number} jatekos.tamadas - A játékos támadóereje.
     * @returns {void}
     */
    render(jatekos) {
        this.parent.innerHTML = `
            <h3>${jatekos.nev}</h3>
            <p>Élet: ${jatekos.elet}</p>
            <p>Támadás: ${jatekos.tamadas}</p>
        `;
    }
}
