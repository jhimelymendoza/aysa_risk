import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    FlexLayoutModule,
    NzBadgeModule,
    TranslateModule,
    NzSelectModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }]
})
export class LayoutModule {}
