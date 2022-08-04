import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { fadeInOut } from 'src/app/core/animations';
import { Note } from '../services/models';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'aysr-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.less'],
  animations: [fadeInOut]
})
export class NotesHomeComponent implements OnDestroy, OnInit {
  searchInput: FormControl = new FormControl();
  private _unsubscribe: Subject<void> = new Subject();
  private _notes: Array<Note> = [];
  public notes: Array<Note> = [];
  isLoading = true;

  constructor(private _notesService: NotesService) {
    this.searchInput.valueChanges
      .pipe(takeUntil(this._unsubscribe), debounceTime(500), distinctUntilChanged())
      .subscribe({
        next: (value: string) => {
          this.notes = this._notes.filter((i) => {
            return i.text.toUpperCase().includes(value.toUpperCase());
          });
        }
      });
  }

  ngOnInit(): void {
    this._notesService
      .getNotes()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(
        (response) => {
          this._notes = response.result!;
          this.notes = this._notes!;
          this.isLoading = false;
        },
        (_) => {
          //TODO: Manage Error
        }
      );
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
