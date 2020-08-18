import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class CandidatesComponent implements OnInit {
  displayModal: boolean = false;

  showModal() {
    this.displayModal = true;
  }

  products: Object[] = [
    {
      fname: 'Janet ',
      lname: 'Gonzalez',
      id: '334',
      name_abbr: 'JG',
      status: 'Ready to Hire',
      issues: '0',
      start_date: '24 Mar 2017',
      hire_code: '33444',
      assignment: 'Jonathan Bradly',
    },
    {
      fname: 'Wayne ',
      lname: 'Shaw',
      id: '876',
      name_abbr: 'WS',
      status: 'Needs review',
      issues: '2',
      start_date: '21 Sept 2017',
      hire_code: '32569',
      assignment: 'Karl Jenkins',
    },
    {
      fname: 'Roy ',
      lname: 'Guerrero',
      id: '443',
      name_abbr: 'RG',
      status: 'Noot hired',
      issues: '3',
      start_date: '24 April 2017',
      hire_code: '56234',
      assignment: 'Keith Walters',
    },
    {
      fname: 'Rebeka ',
      lname: 'Scott',
      id: '554',
      name_abbr: 'RS',
      status: 'Needs reivew',
      issues: '2',
      start_date: '04 Oct 2017',
      hire_code: '45698',
      assignment: 'Rachel Bishop',
    },
    //
    {
      fname: 'Roy ',
      lname: 'Guerrero',
      id: '443',
      name_abbr: 'RG',
      status: 'Noot hired',
      issues: '3',
      start_date: '24 April 2017',
      hire_code: '56234',
      assignment: 'Keith Walters',
    },
    {
      fname: 'Rebeka ',
      lname: 'Scott',
      id: '554',
      name_abbr: 'RS',
      status: 'Needs reivew',
      issues: '2',
      start_date: '04 Oct 2017',
      hire_code: '45698',
      assignment: 'Rachel Bishop',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
