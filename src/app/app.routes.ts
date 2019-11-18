import { Routes } from '@angular/router';
import { AcceptTcWrapperComponent } from './accept-tc.wrapper/accept-tc-wrapper.component';
import { AccessibilityComponent, CookiePolicyComponent, PrivacyPolicyComponent, ServiceDownComponent } from './components';
import { MediaViewerWrapperComponent } from './components/media-viewer-wrapper/media-viewer-wrapper.component';
import { TermsAndConditionsComponent } from './containers';
import { AcceptTermsGuard } from './guards/acceptTerms.guard';
import { AllowAcceptTermsGuard } from './guards/allowAcceptTerms.guard';
import { AuthGuard } from './services/auth/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cases',
    pathMatch: 'full'
  },
  {
    path: 'cases',
    canActivate: [AuthGuard, AcceptTermsGuard],
    loadChildren: '../cases/cases.module#CasesModule'
  },
  { path: 'case/:jurisdiction/:case-type/:cid', redirectTo: 'cases/case-details/:cid', pathMatch: 'full' },
  { path: 'case/:cid', redirectTo: 'cases/case-details/:cid', pathMatch: 'full' },
  { path: 'case-details/:cid', redirectTo: 'cases/case-details/:cid', pathMatch: 'full' },
  { path: 'v2/case/:cid', redirectTo: 'cases/case-details/:cid', pathMatch: 'full' },
  {
    path: 'cookies',
    component: CookiePolicyComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'accept-terms-and-conditions',
    component: AcceptTcWrapperComponent,
    canActivate: [AllowAcceptTermsGuard]
  },
  {
    path: 'accessibility',
    component: AccessibilityComponent
  },
  { path: 'service-down', component: ServiceDownComponent },
  { path: 'media-viewer', component: MediaViewerWrapperComponent },
  {
    path: '**',
    redirectTo: '/cases',
    pathMatch: 'full'
  }
];
