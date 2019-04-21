import { Injectable } from "@angular/core";
import { Sticker } from "../models/sticker.model";

@Injectable()
export class StickerService{
    private key: number = 0;
    private list_name: string = "StickerList";

    constructor(){
        let list: Sticker[] = [];
        list.push({ Id: 0, Name: "First sticker", CreateDate: new Date(), LastEditDate: null });
        list.push({ Id: 1, Name: "Second Sticker", CreateDate: new Date(), LastEditDate: null });
        this.key = 2;
        localStorage.setItem(this.list_name, JSON.stringify(list));
    }

    get(id: number): Sticker{
        return JSON.parse(localStorage.getItem(this.list_name))[id];
    }

    getAll():Sticker[]{
        return JSON.parse(localStorage.getItem(this.list_name));
    }

    delete(id: number) : void{
        let list = JSON.parse(localStorage.getItem(this.list_name));
        list.splice(list.findIndex(item => item.Id === id), 1);
        localStorage.setItem(this.list_name, JSON.stringify(list));
    }

    post(sticker: Sticker): number{
        let list = JSON.parse(localStorage.getItem(this.list_name));
        sticker.Id = ++this.key;
        sticker.CreateDate = new Date();
        list.push(sticker);
        localStorage.setItem(this.list_name, JSON.stringify(list));
        return sticker.Id;
    }

    put(sticker:Sticker){
        let list = JSON.parse(localStorage.getItem(this.list_name));
        sticker.LastEditDate = new Date();
        list[sticker.Id] = sticker;
        localStorage.setItem(this.list_name, JSON.stringify(list));
    }

}