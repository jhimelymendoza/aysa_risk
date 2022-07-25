import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardService } from '../security/services/auth/auth-gard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tool-dev',
        loadChildren: () => import('../dev-tool/dev-tool.module').then((m) => m.DevToolModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'administracion',
        loadChildren: () =>
          import('../../modules/administration/administration.module').then((m) => m.AdministrationModule),
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
