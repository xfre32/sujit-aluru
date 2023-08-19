import {AfterViewInit, Component, OnInit} from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import {Carousel, Modal} from "bootstrap";
import {ICertification, ICertificationDetail} from "../shared/models/achievements-type.interface";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit, AfterViewInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    const carousels: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel');
    carousels.forEach((carousel: HTMLElement): void => {
      this.startCarouselCycle(carousel)
    })
    const pdfModal = document.getElementById('pdfModal');
    if(pdfModal)
      this.modalEventListener(pdfModal);
    const allCards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
    allCards.forEach((card: HTMLElement): void => {
      this.observer.observe(card);
    })
  }

  startCarouselCycle(carousel: HTMLElement): void {
    const carouselBootstrap: Carousel = Carousel.getOrCreateInstance(carousel);
    carouselBootstrap.cycle();
  }

  onMouseHover(event: MouseEvent): void {
    this.mouseHovered = event.type === 'mouseenter';
    const hoveredCard: HTMLDivElement = event.target as HTMLDivElement;
    if(this.mouseHovered) {
      hoveredCard.classList.add('card-hovered')
      hoveredCard.classList.replace('shadow-sm', 'shadow-lg');
    }
    else {
      hoveredCard.classList.remove('card-hovered');
      hoveredCard.classList.replace('shadow-lg', 'shadow-sm');
    }
  }

  modalEventListener(pdfModal: HTMLElement) {
    pdfModal.addEventListener('show.bs.modal', (event: Event) => {
      const image = (event as Modal.Event).relatedTarget;
      const id = image ? image.getAttribute('id') : null;
      const title = image ? image.getAttribute('alt') : null;
      const courseTitle: Element | null = pdfModal.querySelector('.course-title');
      if(courseTitle) {
        courseTitle.textContent = title;
      }
      const pdfObject = pdfModal.querySelector('embed');
      if(pdfObject) {
        pdfObject.setAttribute('src', `${this.pdfSrc}/pdf${id}.pdf`);
      }

      const modalTitle = pdfModal.querySelector('.modal-title');
      let courseOrg = '';
      for (let index = 0; index < this.certsProps.length; index++) {
        const cert = this.certsProps[index].certs.find((cert: ICertificationDetail) => cert.name === title);
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

  currYear: number = this.sharedService.thisYear;
  imgPath = 'achievements_img.png';
  heroText = 'My Certifications';
  heroDesc = 'endorsed by established Institutions & Organizations';
  pdfSrc = 'assets/certs/pdfs';

  mouseHovered = false;

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void  => {
    const cardInView: Element = entries[0].target;
    const orgOfTheCard: HTMLElement = cardInView.parentElement?.nextSibling?.childNodes[0] as HTMLElement;
    if(entries[0].isIntersecting) {
      cardInView.classList.replace('p-lg-0', 'p-lg-2');
      orgOfTheCard.classList.remove('opacity-0');
      orgOfTheCard.classList.add('heading-animation');
      this.observer.unobserve(cardInView)
    }
  }, { threshold: [0.5, 0.6, 0.8, 1] });

  certsProps: ICertification[] = [
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
