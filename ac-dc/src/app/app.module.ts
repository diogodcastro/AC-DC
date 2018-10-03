import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    UiModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
