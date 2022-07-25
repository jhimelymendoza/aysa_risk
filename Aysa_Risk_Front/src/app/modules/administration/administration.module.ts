import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdministrationLayoutComponent } from './administration-layout.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';

@NgModule({
  declarations: [AdministrationLayoutComponent, HomeAdministrationComponent],
  imports: [CommonModule, RouterModule, AdministrationRoutingModule]
})
export class AdministrationModule {}
