import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import {Carousel, Modal} from "bootstrap";
import {ICertification, ICertificationDetail} from "../shared/models/achievements-type.interface";

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.css'],
    standalone: false
})
export class AchievementsComponent implements OnInit, AfterViewInit {
  @ViewChild('root') root!: ElementRef<HTMLElement>
  @ViewChild('pdfModal') pdfModal!: ElementRef<HTMLElement>;
  @ViewChildren('carousel') carousels!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('card') allCards!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('courseTitle') courseTitle!: ElementRef<HTMLElement>;
  @ViewChild('modalTitle') modalTitle!: ElementRef<HTMLElement>
  @ViewChild('embed') pdfObject!: ElementRef<HTMLElement>

  contentAvailable = false;

  constructor(private sharedService: SharedService) {}

  @HostListener('window:load', ['$event'])
  onWindowLoad(event: Event): void {
    // Check if the target of the event is the embed element
    console.log("event triggered")
    if (event.target === this.pdfObject.nativeElement.querySelector('embed')) {
      console.log('Content loaded!');
      this.contentAvailable = true;
      // You can perform additional actions here
    }
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    this.sharedService.scrollIntoView(this.root.nativeElement);

    if(this.pdfModal.nativeElement)
      this.modalEventListener(this.pdfModal.nativeElement);

    this.carousels.forEach((carousel: ElementRef): void => {
      this.startCarouselCycle(carousel.nativeElement)
    })

    this.allCards.forEach((card: ElementRef): void => {
      this.observer.observe(card.nativeElement);
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
      this.courseTitle.nativeElement.textContent = title;

      console.log(this.pdfObject)

      this.pdfObject.nativeElement.setAttribute('src', `${this.pdfSrc}/pdf${id}.pdf`);

      let courseOrg = '';
      for (let index = 0; index < this.certsProps.length; index++) {
        const cert = this.certsProps[index].certs.find((cert: ICertificationDetail) => cert.name === title);
        if(cert) {
          courseOrg = this.certsProps[index].org;
          break;
        }
      }

      this.modalTitle.nativeElement.textContent = courseOrg;
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

  contentLoaded() {
    this.contentAvailable = true;
  }
}
