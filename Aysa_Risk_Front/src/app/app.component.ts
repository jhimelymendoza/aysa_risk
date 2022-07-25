import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aysr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  title = 'ng_zorro_theme';
  langs: string[] = [];

  constructor(private httpClient: HttpClient, private _translateService: TranslateService) {
    this.settingLang();
  }

  ngOnInit(): void {
    const auth_token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZXIiLCJleHAiOjE2NTc2MzE2MzYsImlhdCI6MTY1NzU0NTIzNn0.aFWi78gtR39eEc5-RqRw0e4s186aVSkcIkOAW2cH9wEpftXgwEO95xYo09tq3eqCsKWcAMCQQVM7CZedGxFmbw';
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`
    });
    this.httpClient.get(' https://localhost:7131/Notes').subscribe({
      next: (token) => {
        // eslint-disable-next-line no-console
        console.log(token);
      },
      error: (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    });
  }

  private settingLang() {
    this._translateService.setDefaultLang('es');
    this._translateService.use('es');
    this._translateService.addLangs(['es', 'en']);
    this.langs = this._translateService.getLangs();
  }
}
