import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2/angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { TextMaskModule } from 'angular2-text-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmisFormCadastroComponent } from './emis-form-cadastro/emis-form-cadastro.component';
import { EmisInfoComponent } from './emis-info/emis-info.component';
import { EmisHomeComponent } from './emis-home/emis-home.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmisFormCadastroComponent,
    EmisInfoComponent,
    EmisHomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
