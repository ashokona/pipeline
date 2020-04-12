import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { Ng2OdometerModule } from 'ng2-odometer';
import { ToastrModule } from 'ngx-toastr';
import { MdePopoverModule } from '@material-extended/mde';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UnderDevComponent } from './shared/components/under-dev/under-dev.component';
import { HttpConfigInterceptor } from './shared/services/httpconfig.interceptor';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';
import { RestrictedAccessComponent } from './shared/components/restricted-access/restricted-access.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderDevComponent,
    RestrictedAccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule,
    MdePopoverModule,
    ToastrModule.forRoot({
      timeOut: 100000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true
    }),
    Ng2OdometerModule.forRoot(),
    NgbModule
  ],
  entryComponents: [
    UnderDevComponent,
    LoadingComponent,
    RestrictedAccessComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
