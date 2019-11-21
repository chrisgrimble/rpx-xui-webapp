import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import * as fromApp from '../store';
import { Store, select } from '@ngrx/store';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';
import { TermsAndCondition } from 'src/app/models/TermsAndCondition';
import { AppUtils } from '../app-utils';
import { GuardUtil } from './guardUtil';

@Injectable({
  providedIn: 'root'
})
export class AcceptTermsGuard implements CanActivate {
  constructor(private store: Store<fromApp.State>,
              private guardUtil: GuardUtil) {
  }

  canActivate(): Observable<boolean> {
    return this.guardUtil.canActivate(this.store, 'accept-terms-and-conditions', 'false');
  }
}