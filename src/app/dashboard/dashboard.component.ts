import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  cols: any[];
  applicant_data: Object[] = [
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
    {
      company: 'DSC',
      jobs: 'Backend Developer (Java/PHP)',
      applied_date: '24 Jun, 2020',
      status: 'Applied',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'company', header: 'Company' },
      { field: 'jobs', header: 'Jobs' },
      { field: 'applied_date', header: 'Applied' },
      { field: 'status', header: 'Status' },
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }
      return parseInt(filter) > value;
    };
  }
}
