export default class Jatekos{
    constructor(nev, kep){
        this.nev=nev
        this.kep=kep
        this.elet=2
        this.pont=0
        this.helyzet={x:0, y:0}
        this.hatizsak=[]
    }
    megjelenit(){
        console.log(`${this.nev} (${this.pont}pont)-pozició:`,this.helyzet)
    }
    targyFelvesz(targy){
        this.hatizsak.push(targy)
        this.pont += targy.ertek
        console.log(`Felvétel egy tárgyat: ${targy.nev}(+${targy.ertek}pont)`)
    }
    setHelyzet(dx, dy){
        this.helyzet.x +=dx
        this.helyzet.y +=dy
    }

    getNev(){
        return this.nev
    }

    getPont(){
        return this.pont
    }
}