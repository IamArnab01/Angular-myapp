import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  Event_data: Object[] = [
    {
      url:
        'https://media-fastly.hackerearth.com/media/hackathon/happiest-minds-data-engineer-hiring-challenge/images/9561929c11-Happiest_Mind_Listing_Image.png',
      logo: '',
      company_name: 'Company Name',
      count: '25',
      title: 'Lorem ipsum',
      header: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      deadline: 'Ends in',
      day: '4',
      hour: '21',
      min: '25',
    },
    {
      url:
        'https://media-fastly.hackerearth.com/media/hackathon/hackerearth-machine-learning-challenge-pride-month-edition/images/979795c4ba-Pride_ListingImage.png',
      logo: '',
      company_name: 'Company Name',
      count: '35',
      title: 'Lorem ipsum',
      header: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      deadline: 'Ends in',
      day: '5',
      hour: '11',
      min: '45',
    },
    {
      url:
        'https://media-fastly.hackerearth.com/media/hackathon/esko-software-engineer-hiring-challenge-july20/images/4fcd4390b6-Esko_listing.png',
      logo: '',
      company_name: 'Company Name',
      count: '1235 ',
      title: 'Lorem ipsum',
      header: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      deadline: 'Ends in',
      day: '12',
      hour: '1',
      min: '56',
    },
    {
      url:
        'https://media-fastly.hackerearth.com/media/hackathon/july-circuits-20/images/c97d708ac2-245x140.jpg',
      logo: '',
      company_name: 'Company Name',
      count: '251',
      title: 'Lorem ipsum',
      header: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      deadline: 'Ends in',
      day: '8',
      hour: '7 ',
      min: '10',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
