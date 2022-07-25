import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationLayoutComponent } from './administration-layout.component';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationLayoutComponent,
    children: [
      {
        path: '',
        component: HomeAdministrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
