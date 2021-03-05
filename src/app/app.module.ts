import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// NgModule --> es6
// declarations ----> let/const
// imports ----> import
// exports ----> export

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent // Pipe, Directives
  ],
  imports: [
    BrowserModule // NgModule
  ],
  exports: [], //  Pipe, Directives, NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
