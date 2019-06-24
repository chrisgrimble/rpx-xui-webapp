import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../app/services/ccd-config/ccd-case.config';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';

import {
  CaseUIToolkitModule,
  DraftService,
  AlertService,
  HttpService,
  AuthService as CCDAuthService,
  CasesService,
  HttpErrorService,
  AbstractAppConfig,
  CaseEditWizardGuard,
  RouterHelperService,
  DocumentManagementService,
  PageValidationService,
  PlaceholderService,
  RequestOptionsBuilder,
  SearchFiltersModule,
  SearchResultModule,
  CreateCaseFiltersModule,
  CaseListFiltersModule
} from '@hmcts/ccd-case-ui-toolkit';

import { casesRouting } from './case-feature.routes';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';
import {SharedModule} from '../app/shared/shared.module';
import {HttpModule} from '@angular/http';
// from containers
import * as fromContainers from './containers';
// from components
// import * as fromComponents from './components';
// from services
import * as fromServices from './services';
import {ProvidersModule} from '../app/providers/providers.module';

@NgModule({
  imports: [
    CommonModule,
    CaseUIToolkitModule,
    CreateCaseFiltersModule,
    SearchResultModule,
    HttpClientModule,
    StoreModule.forFeature('cases', reducers),
    EffectsModule.forFeature(effects),
    casesRouting,
    SharedModule,
    SearchFiltersModule,
    HttpModule,
    ProvidersModule,
    CaseListFiltersModule,
    SearchResultModule
  ],
  declarations: [...fromContainers.containers],
  providers: [
    PlaceholderService,
    CasesService,
    CCDAuthService,
    HttpService,
    HttpErrorService,
    AlertService,
    DraftService,
    PageValidationService,
    CaseEditWizardGuard,
    RouterHelperService,
    DocumentManagementService,
    RequestOptionsBuilder,
    {
      provide: AbstractAppConfig,
      useExisting: AppConfig
    },
    ScrollToService,
    ...fromServices.services

  ]
})
/**
 * Entry point for Cases Module that is also lazy loaded.
 */
export class CasesModule { }
