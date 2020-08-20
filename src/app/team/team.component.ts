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

  CEO_Data: Object = [
    {
      src:
        'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/18/Pictures/_339b2650-e110-11ea-983a-0aba0c178f59.jpg',
      name: 'Person1',
      post: 'CEO',
      email: 'ceo@expidence.co.in',
    },
  ];
  Team_Data: Object = [
    {
      src:
        'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/18/Pictures/_339b2650-e110-11ea-983a-0aba0c178f59.jpg',
      name: 'Person1',
      post: 'post1',
      email: 'person1@expidence.co.in',
    },
    {
      src:
        'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/18/Pictures/_339b2650-e110-11ea-983a-0aba0c178f59.jpg',
      name: 'Person2',
      post: 'post2',
      email: 'person2@expidence.co.in',
    },
    {
      src:
        'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/18/Pictures/_339b2650-e110-11ea-983a-0aba0c178f59.jpg',
      name: 'Person3',
      post: 'post3',
      email: 'person3@expidence.co.in',
    },
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
