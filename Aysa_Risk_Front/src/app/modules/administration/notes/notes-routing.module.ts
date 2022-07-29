import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { NotesLayoutComponent } from './notes-layout.component';

const routes: Routes = [
  {
    path: '',
    component: NotesLayoutComponent,
    children: [
      {
        path: '',
        component: NotesHomeComponent
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
