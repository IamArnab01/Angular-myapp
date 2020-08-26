import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [ConfirmationService],
})
export class OverviewComponent implements OnInit {
  msgs: Message[] = [];
  text: string;
  selectedFile: File;
  award_header: string;

  display_edit_certi: boolean;
  display_edit_award: boolean;
  display_edit_testimony: boolean;

  display_add_certi: boolean;
  display_add_award: boolean;
  display_add_testimony: boolean;

  gender_data: any;
  dept_data: any;
  options: any;

  responsiveOptions: any;

  CertificateData: Object[] = [
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '11/2/2019',
      organisation: 'abcd',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '12/7/2018',
      organisation: 'adfd',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '23/12/2018 ',
      organisation: 'qwert',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '4/6/2017',
      organisation: 'fghj',
    },
    //
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '11/2/2019',
      organisation: 'abcd',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '12/7/2018',
      organisation: 'adfd',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '23/12/2018 ',
      organisation: 'qwert',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '4/6/2017',
      organisation: 'fghj',
    },
  ];

  AwardsData: Object[] = [
    {
      src: 'assets/medal-1.png',
      type: '2016 International Mathematics Olypdiad',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/trophy.png',
      type: 'Winner of 2019-20 Inter IIT Hackathon',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/medal.png',
      type: 'Best Volenteer of the year 2019, NSS IIT Roorkee',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/award.png',
      type: 'Top 20 performer of AWS certified architect exam 2019',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    //
    {
      src: 'assets/medal-1.png',
      type: '2016 International Mathematics Olypdiad',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/trophy.png',
      type: 'Winner of 2019-20 Inter IIT Hackathon',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/medal.png',
      type: 'Best Volenteer of the year 2019, NSS IIT Roorkee',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
    {
      src: 'assets/award.png',
      type: 'Top 20 performer of AWS certified architect exam 2019',
      issueDate: '1/2/2003',
      issuedBy: 'asdfgh',
    },
  ];

  testimonial_data: Object[] = [
    {
      src:
        'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam cumque blanditiis dolore veniam asperiores tenetur sint cupiditate. Illum vel possimus',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families dis',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture. Mrs can hundred its greater account. ',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consul',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity re',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls you',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
    {
      src:
        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw',
      author: 'John Doe',
      role: 'CEO@abcd.com',
    },
  ];

  constructor(private confirmationService: ConfirmationService) {
    this.gender_data = {
      labels: ['Boys', 'Girls'],
      datasets: [
        {
          data: [55, 45],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    this.dept_data = {
      labels: ['Civil', 'CSE', 'ECE', 'Electrical', 'Mechanical'],
      datasets: [
        {
          data: [28, 17, 15, 26, 14],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF00FF',
            '#1d9f87',
          ],
        },
      ],
    };

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };

    // for carousel
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 2,
      },
    ];
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadCerti() {
    // actual logic goes here
  }

  addTestimonyModal() {
    this.display_add_testimony = true;
  }

  addAwardsModal() {
    this.display_add_award = true;
  }

  addCertiModal() {
    this.display_add_certi = true;
  }

  editTestimonyModal() {
    this.display_edit_testimony = true;
  }

  editAwardsModal(award_type) {
    this.display_edit_award = true;
    this.award_header = award_type;
  }

  editCertiModal() {
    this.display_edit_certi = true;
  }

  delCerti(certi_name) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: certi_name,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }

  delAward(award_name) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this  record?',
      header: award_name,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }

  delTestimony() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }

  ngOnInit() {}
}
