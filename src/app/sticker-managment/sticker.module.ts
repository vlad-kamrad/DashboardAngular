import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StickerRoutingModule } from './sticker-routing.module';
import { StickerCreateComponent } from './components/create/sticker-create.component';
import { StickerListComponent } from './components/list/sticker-list.component';
import { StickerEditComponent } from './components/edit/sticker-edit.component';
import { StickerFormComponent } from './components/form/sticker-form.component';
import { StickerResolveService } from './services/sticker-resolve.service';
import { StickerService } from './services/sticker.service';
import {SearchPipe} from './search.pipe';
//import { CoreModule } from '../core/core.module';
//import { AuthGuard } from '../core/guards/auth.guard';


@NgModule({
  imports: [
    CommonModule,
//    CoreModule,
    FormsModule,
    StickerRoutingModule
  ],
  declarations: [
    StickerListComponent,
    StickerCreateComponent,
    StickerEditComponent,
    StickerFormComponent,
    SearchPipe
  ],
  providers: [
    //AuthGuard,
    StickerResolveService,
    StickerService
  ]
})
export class StickerModule { }