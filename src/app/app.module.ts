import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {TextMaskModule} from 'angular2-text-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmisFormCadastroComponent } from './emis-form-cadastro/emis-form-cadastro.component';
import { EmisInfoComponent } from './emis-info/emis-info.component';
import { EmisHomeComponent } from './emis-home/emis-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmisFormCadastroComponent,
    EmisInfoComponent,
    EmisHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
