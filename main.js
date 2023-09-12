import Megjelenit from "./Megjelenit.js";
//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function(){
    //szülőelem
    const szuloELEM = $(".tarolo")
    new Megjelenit(TODOLIST2, szuloELEM);
})