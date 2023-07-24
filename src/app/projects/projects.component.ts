import {AfterViewInit, Component, OnInit} from '@angular/core';

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

  projects = [
    {
      domain: 'Design Projects',
      works: [
        {
          title: 'Concept Design',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/concept_art.png'
        },
        {
          title: 'Typographic poster',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/poster.png'
        }
      ]
    },
    {
      domain: 'Conventional Projects',
      works: [
        {
          title: 'My Old Portfolio',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/portfolio_old.png'
        },
        {
          title: 'Price Table',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/price_table.png'
        },
        {
          title: 'ICPEDC2021',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/college.png'
        },
        {
          title: 'Simon Game',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/simon_game.png'
        },
        {
          title: 'Drum Kit',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/drum_kit.png'
        },
        {
          title: 'Dicee',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/dice.png'
        },
        {
          title: 'TinDog',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/tindog.png'
        }
      ]
    },
    {
      domain: 'Framework Projects',
      works: [
        {
          title: 'Stock Tracker',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/stock_tracker.png'
        },
        {
          title: 'Expense Tracker',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/expense_tracker.png'
        },
        {
          title: 'Keeper',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/keeper_app.png'
        },
        {
          title: 'To-do List',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/to_do_list.png'
        },
        {
          title: 'Emojipedia',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/emojipedia.png'
        },
        {
          title: 'Live Clock',
          description: 'some random description about the project, tools and technologies used and platform on which it was hosted.',
          previewImg: '../../assets/projects/time.png'
        }
      ]
    }
  ]

  observer: IntersectionObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
    let cardInView = entries[0].target
    if(entries[0].isIntersecting) {
      cardInView.classList.remove('opacity-0');
      const cardId = cardInView.id;
      const cardIndex = cardId.split('.')[1];
      let transitionAnimation = Number(cardIndex) % 2 === 0 ? 'card-fade-in-from-left' : 'card-fade-in-from-right';
      cardInView.classList.add(transitionAnimation);

      this.observer.unobserve(cardInView)
    }
  }, {threshold: [0.3, 0.5, 0.8, 1]})

}
