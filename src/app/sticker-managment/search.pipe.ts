import { Pipe, PipeTransform } from '@angular/core';
import { Sticker } from './models/sticker.model';
import { StaticInjector } from '@angular/core/src/di/injector';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(stickers:Sticker[], value: string){
        value = value.toLowerCase();
        return stickers.filter(stick => {
            return stick.Name.toLowerCase().includes(value);
        });
    }
}