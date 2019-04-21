import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Sticker} from "../../models/sticker.model";
import {StickerService} from "../../services/sticker.service";
import { FormsModule } from '@angular/forms';

@Component({
    selector:"app-sticker-list",
    templateUrl: "./sticker-list.component.html"
})
export class StickerListComponent implements OnInit{
    private list: Sticker[];
    private today: Date = new Date();
    private todayCondition: boolean = false;

    search: string = '';

    constructor(private router: Router, private stickerService: StickerService){}

    ngOnInit(): void {
        this.list = this.stickerService.getAll();
    }

    edit(id: number){
        this.router.navigate([`/sticker/${id}`]);
    }

    add(){
        this.router.navigate([`/sticker/new`]);
    }

    delete(id: number){
        this.stickerService.delete(id);
        this.list.splice(this.list.findIndex(item => item.Id === id), 1);
        this.search = ' ';
    }
}