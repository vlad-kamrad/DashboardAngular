import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StickerListComponent} from "./components/list/sticker-list.component";
import {StickerCreateComponent} from "./components/create/sticker-create.component";
import {StickerEditComponent} from "./components/edit/sticker-edit.component";
import {StickerResolveService} from './services/sticker-resolve.service';

//import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: StickerListComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'new',
        component: StickerCreateComponent
    },
    {
        path: ':stickerId',
        component: StickerEditComponent,
        resolve: { sticker: StickerResolveService }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickerRoutingModule { }