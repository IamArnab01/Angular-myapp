import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ChartModule } from 'primeng/chart';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
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
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    ChartModule,
    CarouselModule,
    MessagesModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
