import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { NotesLayoutComponent } from './notes-layout.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NotesLayoutComponent,
    children: [
      {
        path: '',
        component: NotesHomeComponent
      },
      {
        path: 'new',
        component: NotesDetailComponent
      },
      {
        path: 'edit/:id',
        component: NotesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class NotesRoutingModuleModule {}
