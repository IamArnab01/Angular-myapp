import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    CardModule,
    TabViewModule,
    FormsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
