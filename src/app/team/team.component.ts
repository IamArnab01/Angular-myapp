import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [MessageService],
})
export class TeamComponent implements OnInit {
  // lat = 78.4867;
  // lng = 17.385;
  constructor() {}

  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  CEO_data = [{ name: 'Person1', position: 'CEO' }];
  Team_Data: Object = [
    { name: 'Person1', position: 'CEO' },
    { name: 'Person1', position: 'CEO' },
    { name: 'Person1', position: 'CEO' },
  ];

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
