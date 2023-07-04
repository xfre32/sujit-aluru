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

  ngAfterViewInit() {
    this.contentView1 = document.querySelector('#card0');
    this.contentView2 = document.querySelector('#card1');
    this.contentView3 = document.querySelector('#card2');
    this.contentView4 = document.querySelector('#card3');
    this.animateProgressBarOnLoad();
  }

  imgPath: string = 'skills_img.png';
  heroText: string = 'My Skills & Proficiency';
  heroDesc: string = 'in Web Design & Development';

  contentView1: Element | null = null;
  contentView2: Element | null = null;
  contentView3: Element | null = null;
  contentView4: Element | null = null;


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
          skill: 'Node.js',
          percentage: 40
        },
        {
          id: 'pb17',
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

  animateProgressBarOnLoad() {
    if(this.contentView1)
      this.observer.observe(this.contentView1);
    if(this.contentView2)
      this.observer.observe(this.contentView2)
    if(this.contentView3)
      this.observer.observe(this.contentView3)
    if(this.contentView4)
      this.observer.observe(this.contentView4)
  }

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    if(entries[0].isIntersecting){
      let id: string | null = entries[0].target.getAttribute('id');
      let index: number | undefined = Number(id?.charAt(id?.length - 1))
      let progressBars: NodeListOf<Element> = document.querySelectorAll('.pb' + index)
      progressBars.forEach((bar: any) => {
        let percentage = bar.getAttribute('id').split('.')[1];
        bar.setAttribute('style', `width: ${percentage}%`);
      })
      this.unObserve(entries[0].target)
    }
  }, { threshold: [0.5, 1] });

  unObserve(subject: any) {
    if(subject)
      this.observer.unobserve(subject)
  }

}
