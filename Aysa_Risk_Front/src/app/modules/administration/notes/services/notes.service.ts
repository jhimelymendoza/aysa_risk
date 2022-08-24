import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ResponseBase } from 'src/app/core';
import { Note } from './models';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _mockNotes = [
    {
      text: 'Nota de Ofrecimiento',
      id: 0
    },
    {
      text: 'Nota de Rechazo',
      id: 1
    },
    {
      text: 'Factura Interna',
      id: 2
    },
    {
      text: 'Recibo de Indemnización',
      id: 3
    },
    {
      text: 'Nota de Débito a Contratista',
      id: 4
    },
    {
      text: 'Nota de intimación a Aseguradora',
      id: 5
    },
    {
      text: 'Nota de Intimación a Causante',
      id: 6
    }
  ];

  getNotes(): Observable<ResponseBase<Array<Note>>> {
    return of({ result: this._mockNotes }).pipe(
      delay(300),
      map((response) => {
        const notesResponse = new ResponseBase<Array<Note>>(response, Note);
        if (notesResponse.AnyError) {
          throw new Error('fail load data');
        }
        return notesResponse;
      })
    );
  }
}
