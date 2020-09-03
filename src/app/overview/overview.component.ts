import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [ConfirmationService],
})
export class OverviewComponent implements OnInit {
  msgs: Message[] = [];
  certificateModel: any;
  awardModel: any;
  testimonialModel: any;

  text: string;
  name: string;
  issueDate: string;
  organisation: string;
  role: string;
  selectedFile: File;

  award_header: string;
  certi_header: string;

  display_edit_certi: boolean;
  display_edit_award: boolean;
  display_edit_testimony: boolean;

  display_add_certi: boolean;
  display_add_award: boolean;
  display_add_testimony: boolean;

  display_delete_certi: boolean;
  display_delete_award: boolean;
  display_delete_testimony: boolean;

  confirm_del_certi: boolean;
  confirm_del_award: boolean;
  confirm_del_testimoial: boolean;

  gender_data: any;
  dept_data: any;
  options: any;

  responsiveOptions: any;

  certificate: Object[] = [
    {
      id: '1',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '11/2/2019',
      organisation: 'abcd',
    },
    {
      id: '2',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '12/7/2018',
      organisation: 'adfd',
    },
    {
      id: '3',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '23/12/2018 ',
      organisation: 'qwert',
    },
    {
      id: '4',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '4/6/2017',
      organisation: 'fghj',
    },
    //
    {
      id: '5',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '11/2/2019',
      organisation: 'abcd',
    },
    {
      id: '6',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '12/7/2018',
      organisation: 'adfd',
    },
    {
      id: '7',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '23/12/2018 ',
      organisation: 'qwert',
    },
    {
      id: '8',
      src: 'assets/certi.jpg',
      name: 'Certificate of blah blah',
      issueDate: '4/6/2017',
      organisation: 'fghj',
    },
  ];

  award: Object[] = [
    {
      id: '1',
      src: 'assets/medal-1.png',
      name: '2016 International Mathematics Olypdiad',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '2',
      src: 'assets/trophy.png',
      name: 'Winner of 2019-20 Inter IIT Hackathon',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '3',
      src: 'assets/medal.png',
      name: 'Best Volenteer of the year 2019, NSS IIT Roorkee',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '4',
      src: 'assets/award.png',
      name: 'Top 20 performer of AWS certified architect exam 2019',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    //
    {
      id: '5',
      src: 'assets/medal-1.png',
      name: '2016 International Mathematics Olypdiad',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '6',
      src: 'assets/trophy.png',
      name: 'Winner of 2019-20 Inter IIT Hackathon',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '7',
      src: 'assets/medal.png',
      name: 'Best Volenteer of the year 2019, NSS IIT Roorkee',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
    {
      id: '8',
      src: 'assets/award.png',
      name: 'Top 20 performer of AWS certified architect exam 2019',
      issueDate: '1/2/2003',
      organisation: 'asdfgh',
    },
  ];

  testimonial: Object[] = [
    {
      id: '1',
      src:
        'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam cumque blanditiis dolore veniam asperiores tenetur sint cupiditate. Illum vel possimus',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '2',
      src:
        'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families dis',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '3',
      src:
        'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture. Mrs can hundred its greater account. ',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '4',
      src:
        'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consul',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '5',
      src:
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity re',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '6',
      src:
        'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls you',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
    {
      id: '7',
      src:
        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
      text:
        'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw',
      name: 'John Doe',
      role: 'CEO',
      organisation: 'abcd.com',
      issueDate: '1/2/2020',
    },
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {
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

    // form data's
    this.certificateModel = this.formBuilder.group({
      name: '',
      issueDate: '',
      organisation: '',
    });

    this.awardModel = this.formBuilder.group({
      name: '',
      issueDate: '',
      organisation: '',
    });

    this.testimonialModel = this.formBuilder.group({
      issueDate: '',
      text: '',
      role: '',
      organisation: '',
      name: '',
    });
  }

  // Add section
  addTestimonyModal() {
    this.display_add_testimony = true;
  }

  addAwardsModal() {
    this.display_add_award = true;
  }

  addCertiModal() {
    this.display_add_certi = true;
  }

  onAddCertificate(CertificateData) {
    console.log(CertificateData);
  }

  onAddAward(AwardData) {
    console.log(AwardData);
  }

  onAddTestimonial(TestimonialData) {
    console.log(TestimonialData);
  }
  //

  // Edit section

  onEditCertificate(CertificateData) {}

  onEditAward(AwardData) {}

  onEditTestimonial(TestimonialData) {}

  editTestimonyModal(testimonialData) {
    this.display_edit_testimony = true;
    this.testimonialModel.issueDate = testimonialData.issueDate;
    this.testimonialModel.name = testimonialData.name;
    this.testimonialModel.text = testimonialData.text;
    this.testimonialModel.role = testimonialData.role;
    this.testimonialModel.organisation = testimonialData.organisation;
  }

  editAwardsModal(awardData) {
    this.display_edit_award = true;
    this.award_header = awardData.name;
    this.awardModel.name = awardData.name;
    this.awardModel.issueDate = awardData.issueDate;
    this.awardModel.organisation = awardData.organisation;
  }

  editCertiModal(certiData) {
    this.display_edit_certi = true;
    this.certi_header = certiData.name;
    this.certificateModel.name = certiData.name;
    this.certificateModel.issueDate = certiData.issueDate;
    this.certificateModel.organisation = certiData.organisation;
    console.log(certiData);
  }
  //

  // delete section

  confirm_delete_certificate(event) {
    this.confirm_del_certi = event;
    console.log(this.confirm_del_certi);
    if (event == true || event == false) {
      this.display_delete_certi = false;
      console.log('delete_certi modal is closed');
    }
  }
  confirm_delete_award(event) {
    this.confirm_del_award = event;
    console.log(this.confirm_del_award);
    if (event == true || event == false) {
      this.display_delete_award = false;
      console.log('delete_award modal is closed');
    }
  }
  confirm_delete_testimonial(event) {
    this.confirm_del_testimoial = event;
    console.log(this.confirm_del_testimoial);
    if (event == true || event == false) {
      this.display_delete_testimony = false;
      console.log('delete_testimony modal is closed');
    }
  }

  delCerti(certiData) {
    this.display_delete_certi = true;
    this.certi_header = certiData.name;
    let index = certiData.id;
    console.log(index);
  }

  delAward(awardData) {
    this.display_delete_award = true;
    this.award_header = awardData.name;
    let index = awardData.id;
    console.log(index);
  }

  delTestimony(testimonialData) {
    this.display_delete_testimony = true;
    let index = testimonialData.id;
    console.log(index);
  }
  //

  ngOnInit() {}
}
