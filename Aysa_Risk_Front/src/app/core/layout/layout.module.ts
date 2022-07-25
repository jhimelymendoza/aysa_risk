import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }]
})
export class LayoutModule {}
