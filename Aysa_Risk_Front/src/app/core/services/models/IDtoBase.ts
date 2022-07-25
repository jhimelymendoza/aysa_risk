/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export interface IDto {
  id: string | number;
}

export interface IResponseBase<T> {
  result?: T;
  error: string;
}

export class ResponseBase<T> implements IResponseBase<T> {
  result?: T;
  error: string;

  constructor(responseBase?: any, TCreator?: { new (arg?: any): T | any }) {
    this.error = responseBase?.error;
    if (Array.isArray(responseBase?.result)) {
      this.result = responseBase.result.map((x: any) => {
        return TCreator ? new TCreator(x) : responseBase.result;
      });
    } else if (responseBase?.result) {
      this.result = TCreator ? new TCreator(responseBase.result) : responseBase.result;
    }
  }

  public get AnyError(): boolean {
    return !!this.error;
  }
}
