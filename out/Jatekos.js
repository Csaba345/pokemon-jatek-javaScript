/**
 * @class Jatekos
 * @classdesc A játékos adatait, pozícióját és tárgykezelését megvalósító osztály.
 */
export default class Jatekos {

    /**
     * Létrehoz egy új játékos példányt.
     * @constructor
     * @param {string} nev - A játékos neve.
     * @param {string} kep - A játékos képének elérési útja.
     */
    constructor(nev, kep) {
        /**
         * A játékos neve.
         * @type {string}
         */
        this.nev = nev;

        /**
         * A játékos képe.
         * @type {string}
         */
        this.kep = kep;

        /**
         * A játékos életereje.
         * @type {number}
         */
        this.elet = 2;

        /**
         * A játékos pontszáma.
         * @type {number}
         */
        this.pont = 0;

        /**
         * A játékos pozíciója a pályán.
         * @type {{x: number, y: number}}
         */
        this.helyzet = { x: 0, y: 0 };

        /**
         * A játékos által felvett tárgyak listája.
         * @type {Array<Object>}
         */
        this.hatizsak = [];
    }

    /**
     * Kiírja a játékos aktuális állapotát a konzolra.
     * @returns {void}
     */
    megjelenit() {
        console.log(`${this.nev} (${this.pont} pont) - pozíció:`, this.helyzet);
    }

    /**
     * A játékos felvesz egy tárgyat, és növeli a pontszámát.
     * @param {{nev: string, ertek: number}} targy - A felvett tárgy objektuma.
     * @returns {void}
     */
    targyFelvesz(targy) {
        this.hatizsak.push(targy);
        this.pont += targy.ertek;
        console.log(`Felvett egy tárgyat: ${targy.nev} (+${targy.ertek} pont)`);
    }

    /**
     * A játékos pozícióját módosítja.
     * @param {number} dx - Elmozdulás X irányban.
     * @param {number} dy - Elmozdulás Y irányban.
     * @returns {void}
     */
    setHelyzet(dx, dy) {
        this.helyzet.x += dx;
        this.helyzet.y += dy;
    }

    /**
     * Visszaadja a játékos nevét.
     * @returns {string} A játékos neve.
     */
    getNev() {
        return this.nev;
    }

    /**
     * Visszaadja a játékos pontszámát.
     * @returns {number} A játékos pontszáma.
     */
    getPont() {
        return this.pont;
    }
}
