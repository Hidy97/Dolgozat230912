import { TODOLIST2 } from "../adatok.js";

class Model{
    #list = []
    constructor(list){
        this.#list = TODOLIST2;
    }

    ujAdat(obj){
        this.#list.push(obj)
    }

    getList(){
        //ez a program aktuális állapota
        return this.#list;
    }

    //hozz létre új metódusokat, amik beállítják az állapotokat (kész, töröl, mégse)

    /*
    torol(id){
        this.#list.re;
    }*/
}

export default Model;