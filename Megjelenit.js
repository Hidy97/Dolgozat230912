import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
    #list = [];
    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append(`<table class="table table-bordered table-striped">`);
        this.tablaElem = szuloElem.children("table");
        console.log(this.tablaElem);
        //this.tablazatbaIr();
        this.tablazatbaIr2();

        $(window).on("torles", (event) => {
            console.log(event.detail)

        });
    }


    tablazatbaIr() {
        let txt = "";
        this.#list.forEach((elem) => {
            txt += "<tr>";
            txt += `<td>${elem}</td>`;
            txt += "</tr>";
        })
        this.tablaElem.html(txt);
    }

    tablazatbaIr2() {
        let txt = "";
        this.#list.forEach((elem) => {
            new MegjelenitSor(elem, this.tablaElem)
            //az objektumokból jelenítsd meg a táblázatban az összes kulcsot
            // minden sorvan legyen egy töröl, és egy kész gomb
            // a kész gombra kattintva a vonatkozó tevékenység színe legyen zöld
            // a töröl gombra kattintva a vonatkozó tevékenység tűnjön el a listából
            // unicode pipa U+02713
            // unicode x U+02715

            /*
            txt += "<tr>";
            for (const key in elem) {
                    txt += `<td>${elem[key]}</td>`;
                }
                txt += `<td><span class="kesz">✔️<span><span class="megse">❌<span><span class="torol">🗑️</span></td>`
                txt += "</tr>";
            });
            */


            //txt += `<td>${elem.tevekenyseg}</td>`;
            /*
            txt += `<td>${elem["tevekenyseg"]}</td>`;
            txt += "<td>";
            txt += `<td>${elem["hatarido"]}</td>`;
            txt += "</td>";
            */
        });
    }
}

export default Megjelenit;