/**
 * @class Targy
 * @classdesc Egy tárgy adatait és hatását leíró osztály.
 */
export default class Targy {

    /**
     * @constructor
     * @param {string} nev - A tárgy neve.
     * @param {string} tipus - A tárgy típusa (pl. "gyógyító", "támadó").
     * @param {number} ertek - A tárgy hatásának mértéke.
     */
    constructor(nev, tipus, ertek) {
        this.nev = nev;
        this.tipus = tipus;
        this.ertek = ertek;
    }

    /**
     * A tárgy hatását alkalmazza a játékosra.
     * @param {Jatekos} jatekos - A játékos, akire a tárgy hat.
     * @returns {void}
     */
    alkalmaz(jatekos) {
        if (this.tipus === "gyógyító") {
            jatekos.elet += this.ertek;
        } else if (this.tipus === "támadó") {
            jatekos.tamadas += this.ertek;
        }
    }
}
