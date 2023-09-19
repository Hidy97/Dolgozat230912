import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";
//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "../adatok.js";
class Controller {
    constructor() {
        const szuloELEM = $(".tarolo")
        new Urlap({ tevekenyseg: "", hatarido: '' }, $(".ujadat"))
        new Megjelenit(TODOLIST2, szuloELEM);
        $(window).on("torles", (event) => {
            //console.log(event.detail)
        });

        $(window).on("ujAdatHozzaAdasa", (event) => {
            //console.log(event.detail)
        });
    }
}

export default Controller;