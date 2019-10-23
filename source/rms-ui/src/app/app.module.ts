import { AboutComponent } from './component/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NavComponent } from './component/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddjobComponent } from './component/HR/addjob/addjob.component';
import { JobComponent } from './component/HR/job/job.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JobdetailComponent } from './component/HR/jobdetail/jobdetail.component';
import { LoginComponent } from './component/HR/login/login.component';
import { RegisterComponent } from './component/HR/register';
import { AlertComponent } from './component/HR/HRservice/alert';
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './component/HR/HRservice/helper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectTrigger, MatOption, MatOptionModule, MatSelect, MatSelectModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatNativeDateModule } from '@angular/material';
import { SidenavComponent } from './component/landingPage/sidenav/sidenav.component';
import { CardViewComponent } from './component/landingPage/card-view/card-view.component';
import { HomeImageComponent } from './component/landingPage/home-image/home-image.component';
import { MaterialModule } from './component/landingPage/card-view/material/material.module';
import { LoginLandingComponent } from './component/landingPage/login-landing/login-landing.component';
import { NavService } from './component/nav/nav.service';
import { LandingComponent } from './component/candidate/landing/landing.component';
import { ProfileComponent } from './component/candidate/profile/profile.component';
import { ViewjobsComponent } from './component/candidate/viewjobs/viewjobs.component';
import { JobdetailsComponent } from './component/candidate/jobdetails/jobdetails.component';
import { ContactComponent } from './component/contact/contact.component';
import { CandidateLoginComponent } from './component/candidate/candidate-login/candidate-login.component';
import { CandidateRegisterComponent } from './component/candidate/candidate-register/candidate-register.component';
import { AuthenticationService } from './component/authentication/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    AddjobComponent,
    JobComponent,
    JobdetailComponent,
    RegisterComponent,
    CandidateLoginComponent,
    CandidateRegisterComponent,
    LoginComponent,
    AlertComponent,
    LandingComponent,
    ProfileComponent,
    AddjobComponent,
    AboutComponent,
    ViewjobsComponent,
    JobdetailsComponent,
    SidenavComponent,
    HomeImageComponent,
    CardViewComponent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    // MatSelectTrigger,
    LoginLandingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    // provider for the selective navigation elements feature
    NavService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
