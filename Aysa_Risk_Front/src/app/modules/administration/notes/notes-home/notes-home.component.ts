import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { fadeInOut } from 'src/app/core/animations';

@Component({
  selector: 'aysr-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.less'],
  animations: [fadeInOut]
})
export class NotesHomeComponent implements OnDestroy {
  searchInput: FormControl = new FormControl();
  private _unsubscribe: Subject<void> = new Subject();
  private _menuItems = [
    {
      text: 'Nota de Ofrecimiento'
    },
    {
      text: 'Nota de Rechazo'
    },
    {
      text: 'Factura Interna'
    },
    {
      text: 'Recibo de Indemnización'
    },
    {
      text: 'Nota de Débito a Contratista'
    },
    {
      text: 'Nota de intimación a Aseguradora'
    },
    {
      text: 'Nota de Intimación a Causante'
    }
  ];

  public menuItems = this._menuItems;
  constructor() {
    this.searchInput.valueChanges
      .pipe(takeUntil(this._unsubscribe), debounceTime(500), distinctUntilChanged())
      .subscribe({
        next: (value: string) => {
          this.menuItems = this._menuItems.filter((i) => {
            return i.text.toUpperCase().includes(value.toUpperCase());
          });
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
