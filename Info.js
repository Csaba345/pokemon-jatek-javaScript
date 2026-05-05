export default class Info{
    constructor(infoElem){
        this.infoElem=infoElem
    }
    kiir(jatekos){
        this.infoElem.innerHTML=`
            <p>Pont: ${jatekos.pont}</p>
            <p>Élet: ${jatekos.elet}</p>
        `
    }
}