import { Component } from '@angular/core';
import { fadeInOut } from 'src/app/core/animations';

@Component({
  selector: 'aysr-home-administration',
  templateUrl: './home-administration.component.html',
  styleUrls: ['./home-administration.component.less'],
  animations: [ fadeInOut  ]
})
export class HomeAdministrationComponent {
  public menuItems = [
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_EMAIL_TEMPLATES',
      icon: 'envelope'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_ALERTS',
      icon: 'bell'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_NOTES',
      icon: 'notes',
      link: 'notas'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_SCHEDULE',
      icon: 'calendar'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_CONTACTS',
      icon: 'users'
    },
    {
      text: 'ADMINISTRATION.ITEM-LIST.ADMIN_WORKFLOW',
      icon: 'share'
    }
  ];
}
