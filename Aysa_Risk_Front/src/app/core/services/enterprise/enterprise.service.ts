import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base.services';
import { map, Observable } from 'rxjs';
import { OptionSelect, ResponseBase } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  constructor(private _http: BaseHttpService) {}

  public getEnterprise(): Observable<ResponseBase<Array<OptionSelect<number>>>> {
    try {
      return this._http.get('/Enterprise').pipe(
        map((response) => {
          const enterpriseResponse = new ResponseBase<Array<OptionSelect<number>>>(response, OptionSelect);
          if (enterpriseResponse.AnyError) {
            throw 'failed load enterprise';
          }
          return enterpriseResponse;
        })
      );
    } catch (error) {
      throw 'failed load enterprise';
    }
  }
}
