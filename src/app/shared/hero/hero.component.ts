import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {

  @Input() heroImage!: string;
  @Input() heroText!: string;
  @Input() heroDesc!: string;
  @Input() heroImageLeft!: boolean;

  prevId: number = 0;
  currId: number = 0;
  transitionAnimation: string = '';

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    let elementInView: Element = entries[0].target
    if(entries[0].isIntersecting) {
      let heroSectionImage: Element = entries[0].target.children[0].children[0];
      let heroSectionText: Element = entries[0].target.children[1];
      heroSectionImage.classList.remove('opacity-0');
      heroSectionImage.classList.add(this.transitionAnimation);
      setTimeout(() => {
        heroSectionText.classList.remove('opacity-0');
        heroSectionText.classList.add(this.transitionAnimation);
      }, 200);
      this.observer.unobserve(elementInView)
    }
  }, {threshold: [0.3, 0.4, 0.5, 0.6]})

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.prevId = this.sharedService.pageNavs.map(page => page.path).indexOf(this.sharedService.previousPath);
    this.currId = this.sharedService.pageNavs.map(page => page.path).indexOf(this.sharedService.currPath);
    this.transitionAnimation = this.currId >= this.prevId ? 'slide-in-left' : 'slide-in-right';
  }

  ngAfterViewInit(): void {
    let heroSectionContainer: Element | null = document.querySelector('.hero-section-container');
    if(heroSectionContainer)
      this.observer.observe(heroSectionContainer);
  }
}
