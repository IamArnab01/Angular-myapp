import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  // flag: boolean = true;

  Job_data: Object[] = [
    {
      event_type: 'upcoming',
      event_data: {
        tag1: 'Full Time',
        tag2: 'Hourly',
        tag3: 'Part Time',
        status: 'In Progress ...',
        job_title: 'Software Engeneer',
        posted: '5 Days Ago',
        count: '25',
        company: 'American Express',
        package: '20 LPA',
        job_type: 'Part Time',
        location: 'Hyderabad',
      },
    },
    {
      event_type: 'live',
      event_data: {
        tag1: 'Full Time',
        tag2: 'Hourly',
        tag3: 'Part Time',
        status: 'In Progress ...',
        job_title: 'Software Engeneer',
        posted: '5 Days Ago',
        count: '25',
        company: 'American Express',
        package: '20 LPA',
        job_type: 'Part Time',
        location: 'Hyderabad',
      },
    },
  ];
  ngOnInit(): void {}
}
