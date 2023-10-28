import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IProjects} from "../shared/models/projects-type.interface";
import {Modal} from "bootstrap";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('embed') targetElement!: ElementRef<HTMLElement>;
  @ViewChild('modalTitle') projectHeading!: ElementRef<HTMLElement>;
  @ViewChild('projectModal') projectModal!: ElementRef<HTMLElement>;
  @ViewChildren('card') projectCards!: QueryList<ElementRef<HTMLElement>>;

  imgPath = 'projects_img.png';
  heroText = 'My Projects';
  heroDesc = 'some cool, some dumb, but loved working every single one';

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  ngAfterViewInit() {
    this.projectCards.forEach((card: ElementRef) => {
      this.observer.observe(card.nativeElement);
    });

    this.modalEventListener(this.projectModal.nativeElement);
  }

  projects: IProjects[] = [
    {
      domain: 'Design Projects',
      works: [
        {
          title: 'Concept Design',
          description: 'A concept-design for a Heart-rate monitoring app, crafted with Adobe Creative Suite tools, encompassing the idea, mood-board, pattern library, and a static interface.',
          previewImg: 'concept_art.png',
          preview: 'assets/projects/pdfs/final.pdf',
          source: 'assets/projects/pdfs/final.pdf'
        },
        {
          title: 'Typographic poster',
          description: 'A typographic poster for Franklin Gothic, designed with Adobe Creative Suite tools, showcasing the typeface\'s essence and interpretation.',
          previewImg: 'poster.png',
          preview: 'assets/projects/pdfs/poster.pdf',
          source: 'assets/projects/pdfs/poster.pdf'
        }
      ]
    },
    {
      domain: 'Framework Projects',
      works: [
        {
          title: 'Stock Tracker',
          description: 'A simple stock tracker web-app built using Angular and Bootstrap, integrated with Finnhub API service that provides all the necessary quote and insider sentiment data for various stocks. The searched stocks are kept as a list in user\'s local-storage to maintain a watchlist.',
          previewImg: 'stock_tracker.png',
          preview: 'https://xfre32.github.io/stock-tracker-app',
          source: 'https://github.com/xfre32/stock-tracker-app'
        },
        {
          title: 'Expense Tracker',
          description: 'An Expense Tracker web-app built with React that lets user add expenses for each month and year and displays a mini expense-chart.',
          previewImg: 'expense_tracker.png',
          preview: 'https://0s482.csb.app/',
          source: 'https://github.com/xfre32/Expense-Tracker'
        },
        {
          title: 'Keeper',
          description: 'A simple notes web-app built with react with modern and intuitive design to make quick notes.',
          previewImg: 'keeper_app.png',
          preview: 'https://nmpok.csb.app/',
          source: 'https://codesandbox.io/s/keeper-app-nmpok'
        },
        {
          title: 'To-do List',
          description: 'A basic To-do list react web-app with funky interface to keep track of to-do list items.',
          previewImg: 'to_do_list.png',
          preview: 'https://4pd0c.csb.app/',
          source: 'https://codesandbox.io/s/to-do-list-4pd0c'
        },
        {
          title: 'Emojipedia',
          description: 'A Goof react web-app to display a list of emojis and their description in a responsive grid layout.',
          previewImg: 'emojipedia.png',
          preview: 'https://d8e4m.csb.app/',
          source: 'https://codesandbox.io/s/emojipedia-d8e4m'
        },
        {
          title: 'Live Clock',
          description: 'A Simple react web-app to display current time.',
          previewImg: 'time.png',
          preview: 'https://kqof9.csb.app/',
          source: 'https://codesandbox.io/s/live-clock-kqof9'
        }
      ]
    },
    {
      domain: 'Conventional Projects',
      works: [
        {
          title: 'My Old Portfolio',
          description: 'My old personal website built with HTML, CSS and Bootstrap.',
          previewImg: 'portfolio_old.png',
          preview: 'https://xfre32.github.io/Portfolio',
          source: 'https://github.com/xfre32/Portfolio'
        },
        {
          title: 'Price Table',
          description: 'A Responsive design mock-up of a generic pricing table built using HTML and CSS flexbox.',
          previewImg: 'price_table.png',
          preview: 'https://xfre32.github.io/Price-Table',
          source: 'https://github.com/xfre32/Price-Table'
        },
        {
          title: 'ICPEDC2021',
          description: 'A site created for my college as an informational platform for International Conference on Power and Embedded Drive control - 2021, built with HTML, CSS & Bootstrap.',
          previewImg: 'college.png',
          preview: 'https://xfre32.github.io/ICPEDC2021',
          source: 'https://github.com/xfre32/ICPEDC2021'
        },
        {
          title: 'Simon Game',
          description: 'An interactive memory game built with HTML, CSS and JavaScript (primarily event-listeners)',
          previewImg: 'simon_game.png',
          preview: 'https://xfre32.github.io/Simon-Game',
          source: 'https://github.com/xfre32/Simon-Game'
        },
        {
          title: 'Drum Kit',
          description: 'A simple Drum-Kit, developed using HTML5, CSS3, and JavaScript event listeners.',
          previewImg: 'drum_kit.png',
          preview: 'https://xfre32.github.io/Drum-Kit',
          source: 'https://github.com/xfre32/Drum-Kit'
        },
        {
          title: 'Dicee',
          description: 'An interactive web page, created with HTML5, CSS3 and JavaScript.',
          previewImg: 'dice.png',
          preview: 'https://xfre32.github.io/Dicee',
          source: 'https://github.com/xfre32/Dicee'
        },
        {
          title: 'TinDog',
          description: 'A static web page, constructed with HTML5, CSS3, and Bootstrap; Emphasizing design, responsiveness, and accessibility, even though it\'s a mock-up!',
          previewImg: 'tindog.png',
          preview: 'https://xfre32.github.io/Tindog-mockup',
          source: 'https://github.com/xfre32/Tindog-mockup'
        }
      ]
    }
  ]

  observer: IntersectionObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
    const cardInView = entries[0].target
    if(entries[0].isIntersecting) {
      cardInView.classList.remove('opacity-0');
      const cardId = cardInView.id;
      const cardIndex = cardId.split('.')[1];
      const transitionAnimation = Number(cardIndex) % 2 === 0 ? 'card-fade-in-from-left' : 'card-fade-in-from-right';
      cardInView.classList.add(transitionAnimation);

      this.observer.unobserve(cardInView)
    }
  }, {threshold: [0.3, 0.5, 0.8, 1]})

  modalEventListener(projectModal: HTMLElement) {
    projectModal.addEventListener('show.bs.modal', (event: Event) => {
      const anchor = (event as Modal.Event).relatedTarget;
      const target = anchor ? anchor.getAttribute('href') : null;
      const targetHeadingContent = anchor ? anchor.getAttribute('title') : null;

      if(target)
        this.targetElement.nativeElement.setAttribute('src', target);

      this.projectHeading.nativeElement.textContent = targetHeadingContent;
    })
  }

}
