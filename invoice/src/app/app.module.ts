import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from "../environments/environment";
import {AppRoutingModule, routingComponents} from "./app.routing.module";
import {AuthService} from "./services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [AuthService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
