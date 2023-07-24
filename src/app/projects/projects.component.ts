import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IProjects} from "../shared/models/projects-type.interface";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  imgPath = 'projects_img.png';
  heroText = 'My Projects';
  heroDesc = 'some cool, some dumb, but I loved working every single one';

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  ngAfterViewInit() {
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach((card: Element) => {
      this.observer.observe(card);
    });
  }

  projects: IProjects[] = [
    {
      domain: 'Design Projects',
      works: [
        {
          title: 'Concept Design',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'concept_art.png'
        },
        {
          title: 'Typographic poster',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'poster.png'
        }
      ]
    },
    {
      domain: 'Conventional Projects',
      works: [
        {
          title: 'My Old Portfolio',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'portfolio_old.png'
        },
        {
          title: 'Price Table',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'price_table.png'
        },
        {
          title: 'ICPEDC2021',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'college.png'
        },
        {
          title: 'Simon Game',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'simon_game.png'
        },
        {
          title: 'Drum Kit',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'drum_kit.png'
        },
        {
          title: 'Dicee',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'dice.png'
        },
        {
          title: 'TinDog',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'tindog.png'
        }
      ]
    },
    {
      domain: 'Framework Projects',
      works: [
        {
          title: 'Stock Tracker',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'stock_tracker.png'
        },
        {
          title: 'Expense Tracker',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'expense_tracker.png'
        },
        {
          title: 'Keeper',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'keeper_app.png'
        },
        {
          title: 'To-do List',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'to_do_list.png'
        },
        {
          title: 'Emojipedia',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'emojipedia.png'
        },
        {
          title: 'Live Clock',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: 'time.png'
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

}
