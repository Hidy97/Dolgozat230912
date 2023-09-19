import Megjelenit from "./Megjelenit.js";
import Urlap from "./Urlap.js";
//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
    //szülőelem
    const szuloELEM = $(".tarolo")
    new Urlap({ tevekenyseg: "", hatarido: '' }, $(".ujadat"))
    new Megjelenit(TODOLIST2, szuloELEM);
    $(window).on("torles", (event) => {
        //console.log(event.detail)
    });

    $(window).on("submit", (event) => {
        //console.log(event.detail)
        TODOLIST2.push()
    });
})