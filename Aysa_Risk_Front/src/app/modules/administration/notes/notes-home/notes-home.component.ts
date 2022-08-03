import { Component } from '@angular/core';
import { fadeInOut } from 'src/app/core/animations';

@Component({
  selector: 'aysr-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.less'],
  animations: [fadeInOut]
})
export class NotesHomeComponent {
  public menuItems = [
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_EMAIL_TEMPLATES'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_ALERTS'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_NOTES'

    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_SCHEDULE'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_CONTACTS'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_WORKFLOW'
    }
  ];  constructor() {}
}
