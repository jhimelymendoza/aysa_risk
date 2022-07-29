import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotesRoutingModuleModule } from './notes-routing.module';
import { RouterModule } from '@angular/router';
import { NotesLayoutComponent } from './notes-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, NotesRoutingModuleModule],
  exports: [],
  declarations: [NotesHomeComponent, NotesLayoutComponent],
  providers: []
})
export class NotesModule {}
