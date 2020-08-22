import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css'],
  providers: [MessageService],
})
export class AcademicsComponent implements OnInit {
  HeaderData: Object[];
  DepartmentList: Object[];
  FacilityList: Object[];
  constructor() {
    this.HeaderData = [
      {
        src: 'assets/students.png',
        count: '7000 +',
        span: 'students',
      },
      {
        src: 'assets/department.png',
        count: '8',
        span: 'major departmnets',
      },
      {
        src: 'assets/collaborations.png',
        count: '3',
        span: 'collaborations',
      },
      {
        src: 'assets/alum.png',
        count: '10000 +',
        span: 'alums all over the globe',
      },
    ];

    this.DepartmentList = [
      {
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        data: 'Phasellus ultricies nisl vel lobortis imperdiet.',
      },
      {
        data:
          'Phasellus id volutpat neque, quis pharetra mauris. Ut aliquet tincidunt ex, eget placerat felis egestas id.',
      },
      {
        data:
          'Praesent aliquam eget elit eu rutrum. Maecenas a lacinia nisi. Pellentesque vel felis quis nibh mattis sodales. ',
      },
      {
        data:
          'Donec a erat quis enim convallis aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien justo',
      },
    ];

    this.FacilityList = [
      {
        src: 'assets/library.png',
        data: 'Digital Library',
      },
      {
        src: 'assets/24-7-Access.png',
        data: '24*7 Library',
      },
      {
        src: 'assets/advance-location.png',
        data: 'Advanced Location',
      },
      {
        src: 'assets/placement.png',
        data: 'Internships and campus Placement proggrame  ',
      },
      {
        src: 'assets/research.png',
        data: 'Reaearch and Foreign Exchange Proggramme',
      },
    ];
  }

  ngOnInit() {}
}
