import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ISkillSet } from "../shared/models/skills-type.interface";
import {SharedService} from "../shared/services/shared.service";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('root') root!: ElementRef;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    this.sharedService.scrollIntoView(this.root.nativeElement);
    const allCards: NodeListOf<Element> = document.querySelectorAll('.card');
    allCards.forEach((card: Element) => {
      this.observer.observe(card)
    });
  }

  onHover(event: MouseEvent): void {
    this.mouseHovered = event.type === 'mouseenter';
    const hoveredCard: HTMLDivElement = event.target as HTMLDivElement;
    const hoveredCardId = hoveredCard.id;
    const hoveredCardIndex = hoveredCardId.charAt(hoveredCardId.length - 1);
    const cardChildren = hoveredCard.querySelectorAll('.card-child' +  hoveredCardIndex);
    if(this.mouseHovered) {
      hoveredCard.classList.add('card-hovered');
      hoveredCard.classList.replace('shadow-sm', 'shadow-lg');
      cardChildren.forEach((child: Element) => {
        if(child.tagName === 'DIV') {
          if(child.hasAttribute('id')) {
            child.classList.replace('bg-secondary', 'bg-dark-teal');
          }
          else {
            child.classList.add('bg-light-gray');
          }
        }
      })
    }
    else {
      hoveredCard.classList.remove('card-hovered');
      hoveredCard.classList.replace('shadow-lg', 'shadow-sm');
      cardChildren.forEach((child: Element) => {
        if(child.tagName === 'DIV') {
          if(child.hasAttribute('id')) {
            child.classList.replace('bg-dark-teal', 'bg-secondary');
          }
          else {
            child.classList.remove('bg-light-gray');
          }
        }
      })
    }
  }

  imgPath = 'skills_img.png';
  heroText = 'My Skills & Proficiency';
  heroDesc = 'in Web Design & Development';

  mouseHovered = false;

  skillSet: ISkillSet[] = [
    {
      domain: 'Programming Languages',
      image: 'programming_img.png',
      skills: [
        {
          id: 'pb00',
          skill: 'C',
          percentage: 50
        },
        {
          id: 'pb01',
          skill: 'C++',
          percentage: 40
        },
        {
          id: 'pb02',
          skill: 'Python',
          percentage: 60
        },
        {
          id: 'pb03',
          skill: 'JavaScript',
          percentage: 70
        },
        {
          id: 'pb04',
          skill: 'TypeScript',
          percentage: 65
        },
        {
          id: 'pb05',
          skill: 'Java',
          percentage: 30
        },
      ]
    },
    {
      domain: 'Web Development',
      image: 'web_dev_img.png',
      skills: [
        {
          id: 'pb10',
          skill: 'HTML5',
          percentage: 90
        },
        {
          id: 'pb11',
          skill: 'CSS3',
          percentage: 80
        },
        {
          id: 'pb12',
          skill: 'Angular',
          percentage: 70
        },
        {
          id: 'pb13',
          skill: 'Bootstrap',
          percentage: 85
        },
        {
          id: 'pb14',
          skill: 'Responsive Web Design',
          percentage: 90
        },
        {
          id: 'pb15',
          skill: 'Version Control System',
          percentage: 65
        },
        {
          id: 'pb16',
          skill: 'APIs & Integration',
          percentage: 65
        },
        {
          id: 'pb17',
          skill: 'Node.js',
          percentage: 40
        },
        {
          id: 'pb18',
          skill: 'MongoDB',
          percentage: 35
        },
      ]
    },
    {
      domain: 'Creative Suite',
      image: 'creative_suite_img.png',
      skills: [
        {
          id: 'pb20',
          skill: 'Adobe InDesign',
          percentage: 55
        },
        {
          id: 'pb21',
          skill: 'Adobe Illustrator',
          percentage: 30
        },
        {
          id: 'pb22',
          skill: 'Figma',
          percentage: 45
        }
      ]
    },
    {
      domain: 'Miscellaneous',
      image: 'misc_img.png',
      skills: [
        {
          id: 'pb30',
          skill: 'Problem Solving',
          percentage: 80
        },
        {
          id: 'pb31',
          skill: 'Troubleshooting',
          percentage: 65
        },
        {
          id: 'pb32',
          skill: 'Root Cause Analysis',
          percentage: 90
        },
        {
          id: 'pb33',
          skill: 'Communication',
          percentage: 75
        }
      ]
    }
  ]

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    if(entries[0].isIntersecting){
      const cardInView: Element = entries[0].target
      const cardId: string = cardInView.id;
      const cardIndex: string = cardId.charAt(cardId.length - 1);
      const cardChildren: NodeListOf<Element> = cardInView.querySelectorAll('.card-child' + cardIndex);
      cardChildren.forEach((child: Element, index: number) => {
        if(child.tagName === 'DIV' && child.hasAttribute('id')) {
          const percentage: string = child.id.split('.')[1];
          setTimeout(() => {
            child.setAttribute('style', `width: ${percentage}%`);
          }, index * 10)
        }
        else if(child.tagName === 'P') {
          child.classList.replace('text-secondary', 'text-secondary-emphasis');
        }
        else {
          child.classList.replace('text-black-50', 'text-info-emphasis');
          child.classList.replace('fw-bold', 'fw-bolder')
        }

      })
      this.observer.unobserve(cardInView)
    }
  }, { threshold: [0.5, 0.8, 1] });

}
