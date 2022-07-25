/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { OptionsParam } from './models/IOptionParams.';
import { IFilterPagination, IPagination, IQueryParamPagination } from './models/IPagination';

const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  resourceUrl = '';
  baseUrl = api;

  constructor(protected http: HttpClient) {
    //if (environment.production) {
    //  this.baseUrl = `${window.location.protocol}//${window.location.host}${api}`;
    //}
  }

  get(url: string, options?: OptionsParam): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, options);
  }

  getWithPagination<T>(
    url: string,
    filter?: IQueryParamPagination,
    options?: OptionsParam
  ): Observable<IPagination<T>> {
    let params = {};
    if (filter) {
      params = {
        sort: (filter?.sort && filter?.sort?.toString()) ?? null,
        sortDirection: (filter?.sort && filter?.sortDirection?.toString()) ?? null,
        page: (filter?.page && filter?.page?.toString()) ?? null,
        pageSize: (filter?.pageSize && filter?.pageSize?.toString()) ?? null,
        propertyFilter: (filter?.filter && filter?.filter?.property) ?? null,
        propertyValue: (filter?.filter && filter?.filter?.value) ?? null
      };
    }

    return this.http
      .get(`${this.baseUrl}${url}`, {
        ...options,
        params: { ...params, ...options?.params }
      })
      .pipe(
        map((result) => {
          const dataPagination = result as any;
          const array = Array.isArray(dataPagination) ? dataPagination : dataPagination.data;

          return {
            data: [...array],
            page: dataPagination.page,
            filter: dataPagination.filter as IFilterPagination,
            pageQuantity: dataPagination.pageQuantity,
            pageSize: dataPagination.pageSize,
            skipPage: dataPagination.skipPage,
            sort: dataPagination.sort,
            total: dataPagination.total,
            sortDirection: dataPagination.sortDirection
          };
        })
      );
  }

  post(url: string, body: any, options?: OptionsParam): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, body, options);
  }

  put(url: string, body?: any, options?: OptionsParam): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, body, options);
  }

  patch(url: string, body: any, options?: OptionsParam): Observable<any> {
    return this.http.patch(`${this.baseUrl}${url}`, body, options);
  }

  delete(url: string, options?: OptionsParam): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`, options);
  }

  getFakeData(url: string, options?: OptionsParam): Observable<any> {
    return this.http.get(`${url}`, options);
  }

  getFakeDataPagination<T>(
    url: string,
    filter?: IQueryParamPagination,
    options?: OptionsParam
  ): Observable<IPagination<T>> {
    let params = {};
    if (filter) {
      params = {
        sort: (filter?.sort && filter?.sort?.toString()) ?? null,
        sortDirection: (filter?.sort && filter?.sortDirection?.toString()) ?? null,
        page: (filter?.page && filter?.page?.toString()) ?? null,
        pageSize: (filter?.pageSize && filter?.pageSize?.toString()) ?? null,
        propertyFilter: (filter?.filter && filter?.filter?.property) ?? null,
        propertyValue: (filter?.filter && filter?.filter?.value) ?? null
      };
    }

    return this.http
      .get(`${url}`, {
        ...options,
        params: { ...params, ...options?.params }
      })
      .pipe(
        map((result) => {
          const dataPagination = result as any;
          const array = Array.isArray(dataPagination) ? dataPagination : dataPagination.data;

          return {
            data: [...array],
            page: dataPagination.page,
            filter: dataPagination.filter as IFilterPagination,
            pageQuantity: dataPagination.pageQuantity,
            pageSize: dataPagination.pageSize,
            skipPage: dataPagination.skipPage,
            sort: dataPagination.sort,
            total: dataPagination.total,
            sortDirection: dataPagination.sortDirection
          };
        })
      );
  }
}
