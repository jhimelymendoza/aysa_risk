import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NotesRoutingModuleModule } from './notes-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { ComponentsModule } from '../core/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotesLayoutComponent } from './notes-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    NotesRoutingModuleModule,
    FormsModule,
    FlexLayoutModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzSpinModule,
    NzSelectModule,
    AngularEditorModule,
    ComponentsModule
  ],
  exports: [],
  declarations: [NotesHomeComponent, NotesLayoutComponent, NotesDetailComponent],
  providers: []
})
export class NotesModule {}
