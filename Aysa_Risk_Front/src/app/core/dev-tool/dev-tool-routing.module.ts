import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ModalsComponent } from './modals/modals.component';
import { ToolDevLayoutComponent } from './tool-dev-layout/tool-dev-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ToolDevLayoutComponent,
    children: [
      {
        path: 'forms',
        component: FormComponent
      },
      {
        path: 'modals',
        component: ModalsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevToolRoutingModule {}
