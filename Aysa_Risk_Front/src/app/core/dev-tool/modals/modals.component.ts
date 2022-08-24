import { Component } from '@angular/core';

@Component({
  selector: 'aysr-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.less']
})
export class ModalsComponent {
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    // eslint-disable-next-line no-console
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    // eslint-disable-next-line no-console
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
