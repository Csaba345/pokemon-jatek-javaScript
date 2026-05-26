/**
 * @class Services
 * @classdesc A játék logikai műveleteit kiszolgáló segédosztály.
 */
export default class Services {

    /**
     * Kiszámítja a sebzés mértékét.
     * @param {Jatekos} tamado - A támadó játékos.
     * @param {Jatekos} vedo - A védekező játékos.
     * @returns {number} - A sebzés mértéke.
     */
    static sebzes(tamado, vedo) {
        return tamado.tamadas;
    }

    /**
     * Ellenőrzi, hogy vége van-e a játéknak.
     * @param {Jatekos} j1 - Az első játékos.
     * @param {Jatekos} j2 - A második játékos.
     * @returns {boolean} - Igaz, ha valamelyik játékos meghalt.
     */
    static vege(j1, j2) {
        return !j1.el() || !j2.el();
    }
}
