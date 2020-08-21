import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [MessageService],
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
