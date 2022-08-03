import { Component, Input } from '@angular/core';

@Component({
  selector: 'aysr-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent{
  @Input() text = '';
  @Input() icon: string | undefined;
  @Input() link!: string | undefined;
}
