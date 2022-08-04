import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, FlexLayoutModule, NzIconModule, TranslateModule, RouterModule],
  exports: [ItemListComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }]
})
export class ComponentsModule {}
