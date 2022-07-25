import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './core/security/services/auth/auth-gard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'login',
    loadChildren: () => import('./core/security/security.module').then((m) => m.SecurityModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
