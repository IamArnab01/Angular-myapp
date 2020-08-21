import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [MessageService],
})
export class OverviewComponent implements OnInit {
  gender_data: any;
  dept_data: any;
  options: any;

  responsiveOptions: any;

  CertificateData: Object[] = [
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
    },
    {
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
    },
  ];

  AwardsData: Object[] = [
    {
      src: 'assets/medal-1.png',
      type: '2016 International Mathematics Olypdiad',
    },
    {
      src: 'assets/trophy.png',
      type: 'Winner of 2019-20 Inter IIT Hackathon',
    },
    {
      src: 'assets/medal.png',
      type: 'Best Volenteer of the year 2019, NSS IIT Roorkee',
    },
    {
      src: 'assets/award.png',
      type: 'Top 20 performer of AWS certified architect exam 2019',
    },
  ];

  testimonial_data: Object[] = [
    {
      src:
        'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam cumque blanditiis dolore veniam asperiores tenetur sint cupiditate. Illum vel possimus dolorem placeat quod nam, voluptatem fugiat eligendi porro dignissimos.',
    },
    {
      src:
        'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable.',
    },
    {
      src:
        'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture. Mrs can hundred its greater account. Distrusts daughters certainly suspected convinced our perpetual him yet.',
    },
    {
      src:
        'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly ',
    },
    {
      src:
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.',
    },
    {
      src:
        'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent.',
    },
    {
      src:
        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      content:
        'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.',
    },
  ];

  constructor() {
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
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {}
}
