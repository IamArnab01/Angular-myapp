import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'cards', component: CardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EventsComponent,
  CardComponent,
  DashboardComponent,
  NotificationComponent,
];
