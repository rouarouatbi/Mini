import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//firebase services
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//angular material modules
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './Dashboard/add-event/add-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassmentComponent } from './Public/classment/classment.component';
import { HomeComponent } from './Public/home/home.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { DashComponent } from './Dashboard/dash/dash.component';
import { SignInComponent } from './Public/Authentifications/sign-in/sign-in.component';
import { SignUpComponent } from './Public/Authentifications/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Public/Authentifications/forget-password/forget-password.component';
import { VerifyMailComponent } from './Public/Authentifications/verify-mail/verify-mail.component';
import { AuthService } from './_services/auth.service';
import { EventComponent } from './Public/event/event.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HomeNavbarComponent } from './utils/home-navbar/home-navbar.component';
import { SubmitComponent } from './Public/submit/submit.component';
import { DragDropDirective } from './utils/drag-drop.directive';
import { StarterComponent } from './Dashboard/starter/starter.component';
import { ProfileComponent } from './Public/profile/profile.component';
import { ContactComponent } from './Public/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    ClassmentComponent,
    HomeComponent,
    SidebarComponent,
    DashComponent,
    ForgetPasswordComponent,
    VerifyMailComponent,
    EventComponent,
    SignUpComponent,
    NavbarComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyMailComponent,
    HomeNavbarComponent,
    SubmitComponent,
    DragDropDirective,
    StarterComponent,
    ProfileComponent,
    ContactComponent,
    
    
  ],

  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatListModule
    
    //MatGridTileHarness
    
  ],
  providers: [AuthService,SignInComponent,SignUpComponent,ProfileComponent,ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
