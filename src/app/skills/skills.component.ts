import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    let allCards: NodeListOf<Element> = document.querySelectorAll('.card');
    allCards.forEach((card: Element) => {
      this.observer.observe(card)
    });
  }

  onHover(event: any): void {
    this.mouseHovered = event.type === 'mouseenter';
    let hoveredCard = event.target;
    let hoveredCardId = hoveredCard.id;
    let hoveredCardIndex = hoveredCardId.charAt(hoveredCardId.length - 1);
    let cardChildren = hoveredCard.querySelectorAll('.card-child' +  hoveredCardIndex);
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

  imgPath: string = 'skills_img.png';
  heroText: string = 'My Skills & Proficiency';
  heroDesc: string = 'in Web Design & Development';

  mouseHovered: boolean = false;

  skillSet: any = [
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
          skill: 'Version Control System (GIT)',
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
      let cardInView: Element = entries[0].target
      let cardId: string = cardInView.id;
      let cardIndex: string = cardId.charAt(cardId.length - 1);

      let cardChildren: NodeListOf<Element> = cardInView.querySelectorAll('.card-child' + cardIndex);
      cardChildren.forEach((child: Element) => {
        if(child.tagName === 'DIV' && child.hasAttribute('id')) {
          let percentage: string = child.id.split('.')[1];
          child.setAttribute('style', `width: ${percentage}%`);
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
