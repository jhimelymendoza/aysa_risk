import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdministrationLayoutComponent } from './administration-layout.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ComponentsModule } from './core/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AdministrationLayoutComponent, HomeAdministrationComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdministrationRoutingModule,
    FlexLayoutModule,
    NzIconModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class AdministrationModule {}
