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
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'concept_art.png',
          preview: 'assets/projects/pdfs/final.pdf',
          source: 'assets/projects/pdfs/final.pdf'
        },
        {
          title: 'Typographic poster',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
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
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'stock_tracker.png',
          preview: 'https://xfre32.github.io/stock-tracker-app',
          source: 'https://github.com/xfre32/stock-tracker-app'
        },
        {
          title: 'Expense Tracker',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'expense_tracker.png',
          preview: 'https://0s482.csb.app/',
          source: 'https://github.com/xfre32/Expense-Tracker'
        },
        {
          title: 'Keeper',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'keeper_app.png',
          preview: 'https://nmpok.csb.app/',
          source: 'https://codesandbox.io/s/keeper-app-nmpok'
        },
        {
          title: 'To-do List',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'to_do_list.png',
          preview: 'https://4pd0c.csb.app/',
          source: 'https://codesandbox.io/s/to-do-list-4pd0c'
        },
        {
          title: 'Emojipedia',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'emojipedia.png',
          preview: 'https://d8e4m.csb.app/',
          source: 'https://codesandbox.io/s/emojipedia-d8e4m'
        },
        {
          title: 'Live Clock',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
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
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'portfolio_old.png',
          preview: 'https://xfre32.github.io/Portfolio',
          source: 'https://github.com/xfre32/Portfolio'
        },
        {
          title: 'Price Table',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'price_table.png',
          preview: 'https://xfre32.github.io/Price-Table',
          source: 'https://github.com/xfre32/Price-Table'
        },
        {
          title: 'ICPEDC2021',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'college.png',
          preview: 'https://xfre32.github.io/ICPEDC2021',
          source: 'https://github.com/xfre32/ICPEDC2021'
        },
        {
          title: 'Simon Game',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'simon_game.png',
          preview: 'https://xfre32.github.io/Simon-Game',
          source: 'https://github.com/xfre32/Simon-Game'
        },
        {
          title: 'Drum Kit',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'drum_kit.png',
          preview: 'https://xfre32.github.io/Drum-Kit',
          source: 'https://github.com/xfre32/Drum-Kit'
        },
        {
          title: 'Dicee',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'dice.png',
          preview: 'https://xfre32.github.io/Dicee',
          source: 'https://github.com/xfre32/Dicee'
        },
        {
          title: 'TinDog',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
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
