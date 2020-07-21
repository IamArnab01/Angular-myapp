import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { EventsComponent } from './events/events.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, EventsComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    CardModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
