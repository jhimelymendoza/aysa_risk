import { Component, Input } from '@angular/core';
import { fadeInOut } from 'src/app/core/animations';

@Component({
  selector: 'aysr-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less'],
  animations: [fadeInOut]
})
export class ItemListComponent {
  @Input() text = '';
  @Input() icon: string | undefined;
  @Input() link!: string | undefined;
  @Input() useTranslate = true;
}
