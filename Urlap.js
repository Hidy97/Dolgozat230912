class Urlap{
    #adat = {}
    constructor(adat, szuloElem){
        this.#adat = adat
        this.szuloElem = szuloElem;
        this.formElem = this.szuloElem.children("form");
        this.tevekenysegElem = this.formElem.children("div").children("#tev");
        this.hataridoElem = this.formElem.children("div").children("#hat");
        this.submitElem = this.formElem.children("div").children("#submit");
        console.log(this.submitElem)
        //submitElem onclick
        this.submitElem.on("click", () =>{
            event.preventDefault();
            this.#adatGyujt()
            this.#esemenyTrigger();
            //console.log("katt")
        })
    }

    #adatGyujt(){
       this.#adat= { tevekenyseg: this.tevekenysegElem.val(), hatarido: this.hataridoElem.val() }

    }

    #esemenyTrigger(){
        console.log(this.#adat)
        const bekuld = new CustomEvent("bekuld", {
            detail:this.#adat
        })
        window.dispatchEvent(bekuld)
    }
}

export default Urlap;