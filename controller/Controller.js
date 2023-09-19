import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";
import Model from "../model/Model.js";
//import { TODOLIST } from "./adatok.js";
//import { TODOLIST2 } from "../adatok.js"; //mitán a Model-ben meghívjuk itt már nincs rá szükség
class Controller {
    constructor() {
        const szuloELEM = $(".tarolo")
        new Urlap({ tevekenyseg: "", hatarido: ""}, $(".ujadat"))
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), szuloELEM, index);
        $(window).on("torles", (event) => {
            console.log(event.detail)
            //ne teljes objektumot, hanem indexet
        });

        $(window).on("bekuld", (event) => {
            //console.log(event.detail)
            MODEL.ujAdat(event.detail);
            //át kell adni az adatot a modellnek
            //aki majd elintézi, hogy berakja a listába
            //meghívjuk az újadat metódust, majd újrapéldányosítjuk
            szuloELEM.empty()
            new Megjelenit(MODEL.getList(), szuloELEM, index);
        });
    }
}

export default Controller;