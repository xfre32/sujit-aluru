import {AfterContentInit, Component, OnInit} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit, AfterContentInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterContentInit(): void {
    this.modalEventListener();
  }

  modalEventListener() {
    const pdfModal = document.getElementById('pdfModal');
    if (pdfModal) {
      pdfModal.addEventListener('show.bs.modal', (event: any) => {
        const image = event.relatedTarget
        let id = image.getAttribute('id');
        let title = image.getAttribute('alt');

        const courseTitle = pdfModal.querySelector('.course-title');
        if(courseTitle) {
          courseTitle.textContent = title;
        }
        const pdfObject = pdfModal.querySelector('embed');
        if(pdfObject) {
          pdfObject.setAttribute('src', `${this.pdfSrc}/pdf${id}.pdf`);
        }

        const modalTitle = pdfModal.querySelector('.modal-title');
        let courseOrg = '';
        for (let index: number = 0; index < this.certsProps.length; index++) {
          let cert = this.certsProps[index].certs.find((cert: any) => cert.name === title);
          if(cert) {
            courseOrg = this.certsProps[index].org;
            break;
          }
        }
        if(modalTitle) {
          modalTitle.textContent = courseOrg;
        }
      })
    }
  }

  currYear: number = this.sharedService.thisYear;
  imgPath: string = 'achievements_img1.png';
  heroText: string = 'My Certifications';
  heroDesc: string = 'endorsed by established Institutions & Organizations';
  pdfSrc: string = '../../assets/certs/pdfs';


  certsProps: any = [
    {
      org: 'Google Developer Experts',
      certs: [
        {
          name: 'Angular Certified Developer',
          path: 'angular_cert.png',
          sno: '00'
        }
      ]
    },
    {
      org: 'LTIMindtree',
      certs: [
        {
          name: 'Certified Full Stack Developer',
          path: 'fs_cert.png',
          sno: '10'
        }
      ]
    },
    {
      org: 'IBM',
      certs: [
        {
          name: 'Introduction to Cloud Development with HTML, CSS & JS',
          path: 'ibm_cert.png',
          sno: '20'
        }
      ]
    },
    {
      org: 'Meta',
      certs: [
        {
          name: 'Introduction to Front-End Development',
          path: 'meta1_cert.png',
          sno: '30'
        },
        {
          name: 'Programming with JavaScript',
          path: 'meta2_cert.png',
          sno: '31'
        },
        {
          name: 'Version Control',
          path: 'meta3_cert.png',
          sno: '32'
        }
      ]
    },
    {
      org: 'Udemy',
      certs: [
        {
          name: 'The Complete ' + this.currYear + ' Web Development Bootcamp',
          path: 'udemy_cert.png',
          sno: '40'
        }
      ]
    },
    {
      org: 'The Hong Kong University of Science & Technology',
      certs: [
        {
          name: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
          path: 'hk_cert.png',
          sno: '50'
        }
      ]
    },
    {
      org: 'University of Colorado Boulder',
      certs: [
        {
          name: 'Graphic Elements of Design: Color Theory & Image Formats',
          path: 'colorado_cert.png',
          sno: '60'
        }
      ]
    },
    {
      org: 'California Institute of Arts',
      certs: [
        {
          name: 'Visual Elements of User Interface Design',
          path: 'cal1_cert.png',
          sno: '70'
        },
        {
          name: 'Introduction to Typography',
          path: 'cal2_cert.png',
          sno: '71'
        },
        {
          name: 'Fundamentals of Graphic Design',
          path: 'cal3_cert.png',
          sno: '72'
        }
      ]
    },
    {
      org: 'University of Michigan',
      certs: [
        {
          name: 'Introduction to HTML5',
          path: 'mich1_cert.png',
          sno: '80'
        },
        {
          name: 'Introduction to CSS3',
          path: 'mich2_cert.png',
          sno: '81'
        },
        {
          name: 'Interactivity with JavaScript',
          path: 'mich3_cert.png',
          sno: '82'
        },
        {
          name: 'Advanced Styling with Responsive Design',
          path: 'mich4_cert.png',
          sno: '83'
        }
      ]
    },
  ]

}
