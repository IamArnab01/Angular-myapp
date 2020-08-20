import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [MessageService],
})
export class TeamComponent implements OnInit {
  constructor() {}

  lat = 78.4867;
  lng = 17.385;

  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  CEO_data: Object = [{ name: 'Person1', position: 'CEO' }];
  Team_Data: Object = [
    { name: 'Person1', position: 'position1' },
    { name: 'Person2', position: 'position2' },
    { name: 'Person3', position: 'position3' },
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
