import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPartyClaimsLayoutComponent } from './third-party-claims-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdPartyClaimsLayoutComponent,
    children: [
      // {
      //   path: 'reclamos',
      //   loadChildren: () => import('../dev-tool/dev-tool.module').then((m) => m.DevToolModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyClaimsRoutingModule {}
