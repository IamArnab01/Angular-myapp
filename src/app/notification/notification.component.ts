import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [MessageService],
})
export class NotificationComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  Data: Object[] = [
    {
      day: 'Today',
      days_data: [
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
      ],
    },

    {
      day: 'Tommorow',
      days_data: [
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
        {
          posted: '7:32',
          header: 'Notifiaction: blah blah blah',
          content: 'lorem ipsum lorem asdfgh',
          button: 'Agree',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZuLiRaxAxDyHlETehHLegQD4plQoxBMtBgA&usqp=CAU',
        },
      ],
    },
  ];

  onTabChange(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index,
    });
  }
  ngOnInit(): void {}
}
