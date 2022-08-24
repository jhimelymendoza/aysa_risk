import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { of } from 'rxjs';
import { fadeInOut } from 'src/app/core/animations';

@Component({
  selector: 'aysr-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.less'],
  animations: [fadeInOut]
})
export class NotesDetailComponent {
  isLoading = false;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: '100%',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote'
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }
    ],
    toolbarHiddenButtons: [
      ['strikeThrough', 'subscript', 'superscript', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList'],
      ['textColor', 'backgroundColor', 'cus44tomClasses', 'link', 'unlink', 'insertVideo', 'removeFormat']
    ],

    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top'
  };
}
