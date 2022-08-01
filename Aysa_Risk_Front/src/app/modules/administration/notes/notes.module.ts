import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotesRoutingModuleModule } from './notes-routing.module';
import { RouterModule } from '@angular/router';
import { NotesLayoutComponent } from './notes-layout.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NotesRoutingModuleModule,
    NzInputModule,
    FormsModule,
    NzCardModule
  ],
  exports: [],
  declarations: [NotesHomeComponent, NotesLayoutComponent],
  providers: []
})
export class NotesModule {}
