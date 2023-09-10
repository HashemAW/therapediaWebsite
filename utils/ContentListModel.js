import { ContentModel } from "./ContentModel";

export class ContentListModel {
    list = []


    constructor(list) {
        list.forEach(element => {
            this.add(element)

        });
        console.log("constructor", this)
    }

    add(item) {

        this.list.push(new ContentModel(item))
    }


    remove(item) {
    }

    get length() {
        return this.list.length;
    }

    filter(func) {
        return this.list.filter(func)
    }

    find(func) {
        return this.list.find(func)
    }

    map(func) {
        return this.list.map(func)
    }
}