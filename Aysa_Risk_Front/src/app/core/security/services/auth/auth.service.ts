import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { User } from './models/user-data.model';
import { Router } from '@angular/router';
import { AccessTokenModel } from './models/access-token.model';
import * as _ from 'lodash';
import { ResponseBase } from '../../../services/models/IDtoBase';
import { BaseHttpService } from '../../../services/base.services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static userData: User;

  bsUserData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  bsIsLoggedIn: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(false);

  public isLoggedIn = this.bsIsLoggedIn.asObservable();
  public userData = this.bsUserData.asObservable();

  constructor(private router: Router, private http: BaseHttpService) {}

  public get ExistToken(): boolean {
    return !!this.AccessToken;
  }

  public get AccessToken(): string | undefined | null {
    return localStorage.getItem('AccessToken');
  }

  public saveToken(token: string): void {
    localStorage.setItem('AccessToken', token);
  }

  public async login(username: string, password: string, enterpriseId: number, remember = false): Promise<boolean> {
    try {
      const response = await this.http.post(`/User/Login`, { username, password, enterpriseId, remember }).toPromise();
      const successful = !!response.error;
      if (!successful) {
        this.saveToken(response.result.token);
        AuthService.userData = new User(response.result.user);
        this.bsUserData.next(AuthService.userData);
      }

      this.setIsLoggedIn(!successful ?? false);
      return Promise.resolve(!successful ?? false);
    } catch (e) {
      this.setIsLoggedIn(false);
      return Promise.resolve(false);
    }
  }

  fakeLoginSuccefull(): Observable<AccessTokenModel> {
    this.setIsLoggedIn(true);
    return of({ accessToken: 'sdfsdfsdf' }).pipe(delay(_.random(1000, 5000)));
  }

  getUserData(setLogin = false): void {
    this.http
      .get(`Usuario/UserData`)
      .pipe(take(1))
      .pipe(
        map((x) => {
          return new ResponseBase<User>(x, User);
        })
      )
      .subscribe((user: ResponseBase<User>) => {
        this.setUserData(user);
        this.setIsLoggedIn(setLogin);
      });
  }

  public setUserData(user: ResponseBase<User>): void {
    AuthService.userData = user.result ?? new User();
    this.bsUserData.next(AuthService.userData);
  }

  public setIsLoggedIn(value: boolean): void {
    this.bsIsLoggedIn.next(value);
  }

  logOut(makeRequest = true): void {
    if (makeRequest) {
      this.http.post(`Usuario/Logout`, null).subscribe(() => {
        this.removeDataLogin();
      });
    } else {
      this.removeDataLogin();
    }
    this.removeDataLogin(); // todo remove after integration
  }

  removeDataLogin(): void {
    localStorage.removeItem('AccessToken');
    // localStorage.setItem('AccessToken', undefined);
    this.setIsLoggedIn(false);
  }

  public static isAdmin(): boolean {
    return this.userData?.profile === 'Administrador';
  }
}
