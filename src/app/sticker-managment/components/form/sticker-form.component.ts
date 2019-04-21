import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Sticker } from "../../models/sticker.model";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sticker-form',
    templateUrl: './sticker-form.component.html'
})
export class StickerFormComponent{
    @Input() sticker : Sticker;
    @Output() submit: EventEmitter<Sticker> = new EventEmitter<Sticker>();

    constructor(private router: Router){}

    onSubmit(){
        this.submit.emit(this.sticker);
    }

    onBack(){
        this.router.navigate([`/sticker`])
    }
} 