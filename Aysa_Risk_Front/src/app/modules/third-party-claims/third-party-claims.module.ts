import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartyClaimsLayoutComponent } from './third-party-claims-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ThirdPartyClaimsLayoutComponent],
  imports: [CommonModule, RouterModule]
})
export class ThirdPartyClaimsModule {}
