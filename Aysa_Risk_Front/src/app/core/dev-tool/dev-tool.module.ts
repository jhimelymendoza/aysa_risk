import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DevToolRoutingModule } from './dev-tool-routing.module';
import { ToolDevLayoutComponent } from './tool-dev-layout/tool-dev-layout.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [ToolDevLayoutComponent, FormComponent, ModalsComponent],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzTypographyModule,
    DevToolRoutingModule,
    NzModalModule
  ],
  exports: []
})
export class DevToolModule {}
