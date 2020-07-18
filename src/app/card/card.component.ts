import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}
  Job_data: Object[] = [
    {
      tag1: 'Full Time',
      tag2: 'Hourly',
      tag3: 'Part Time',
      job_title: 'Software Engeneer (SDE 2)',
      posted: '5 Days Ago',
      count: '25',
      company: 'American Express',
      package: '20 LPA',
      job_type: 'Part Time',
      location: 'Hyderabad',
    },
  ];
  ngOnInit(): void {}
}
