/**
 * @class JatekosTer
 * @classdesc A játékos megjelenítéséért felelős osztály.
 */
export default class JatekosTer {

    /**
     * @constructor
     * @param {HTMLElement} parent - A szülő DOM elem.
     */
    constructor(parent) {
        this.parent = parent;
    }

    /**
     * Megjeleníti a játékos adatait.
     * @param {Jatekos} jatekos - A megjelenítendő játékos.
     * @returns {void}
     */
    render(jatekos) {
        this.parent.innerHTML = `
            <div class="jatekos">
                <h2>${jatekos.nev}</h2>
                <p>Élet: ${jatekos.elet}</p>
                <p>Támadás: ${jatekos.tamadas}</p>
            </div>
        `;
    }
}
