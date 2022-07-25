/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponseBase
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientInterceptor implements HttpInterceptor {
  isRefreshing = false;
  private refreshToken$ = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.AccessToken) {
      request = this.addToken(request, this.authService.AccessToken);
    }

    return next.handle(request).pipe(
      tap((response: any) => {
        // eslint-disable-next-line no-empty
        if (response instanceof HttpResponseBase && response?.status === 200) {
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error?.status === 401) {
          return this.handle401(request, next);
        } else {
          if (error instanceof HttpErrorResponse && error?.status === 400) {
            return this.handle400(error);
          }
          if (error instanceof HttpErrorResponse && error?.status === 404) {
            return this.handle404(error);
          }

          const errorDetails = error?.error;
          return this.handleError(errorDetails);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401(request: HttpRequest<any>, next: HttpHandler) {
    this.authService.removeDataLogin();
    this.router.navigate(['/seguridad/login']);

    return throwError({ title: '401', content: '401', status: 401 });
  }

  private handle400(errorHttp: any) {
    const errorMessage = errorHttp?.error;
    const title = Object.keys(errorMessage);
    const content = errorMessage;
    return throwError({ title, content, status: errorHttp?.status });
  }

  private handle404(error: any) {
    const errorMessage = { ...error?.error };
    const title = Object.keys(errorMessage);
    const content = Object.values(errorMessage);
    const includeImage = error.url.toLowerCase().includes('imagen');
    if (includeImage) {
      this.router.navigate(['/']);
    }
    return throwError({ title, content, status: error?.status });
  }

  private handleError(error: any) {
    const errorMessage = { ...error?.error };
    const title = Object.keys(errorMessage);
    const content = Object.values(errorMessage);
    return throwError({ title, content, status: error?.status });
  }
}
