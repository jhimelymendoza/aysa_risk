import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise/enterprise.service';
import { AlertAysr, OptionSelect, ResponseBase } from '../..';
import { EMPTY, finalize, map, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aysr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  enterprise$!: Observable<Array<OptionSelect<number>>>;
  showAlert = false;
  alert: AlertAysr = {
    type: 'warning',
    message: ''
  };
  loadingEnterprise = true;
  isLogging = false;
  isLoading = false;
  validLogin = false;

  constructor(
    private translateService: TranslateService,
    private readonly fb: FormBuilder,
    private enterpriseService: EnterpriseService,
    private authService: AuthService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      enterprise: [null, [Validators.required]],
      remember: [true]
    });
  }

  async submitForm(): Promise<void> {
    this.showAlert = false;
    if (this.validateForm.valid) {
      // eslint-disable-next-line no-console
      const data = this.validateForm.getRawValue();
      this.isLoading = true;
      this.validLogin = false;
      this.validLogin = await this.authService.login(data.userName, data.password, data.enterprise.id, data.remember);
      if (this.validLogin) {
        this.router.navigate(['/']);
        return;
      }

      this.isLoading = false;
      this.show({ type: 'error', message: this.translateService.instant('LOGIN.CREDENTIAL_INVALID') });
      // this.validateForm.reset();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.enterprise$ = this.enterpriseService.getEnterprise().pipe(
      map((response: ResponseBase<Array<OptionSelect<number>>>) => {
        return response.result ?? [];
      }),
      catchError(() => {
        this.show({ type: 'warning', message: this.translateService.instant('LOGIN.ENTERPRISE_LOAD_ERROR') });
        return EMPTY;
      }),
      finalize(() => {
        this.loadingEnterprise = false;
      })
    );
  }

  show(alert: AlertAysr, show = true) {
    this.alert = alert;
    this.showAlert = show;
  }
}
