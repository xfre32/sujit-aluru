import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSectionContainer') heroSectionContainer!: ElementRef<HTMLElement>

  @Input() heroImage!: string;
  @Input() heroText!: string;
  @Input() heroDesc!: string;
  @Input() heroImageLeft!: boolean;

  prevId = 0;
  currId = 0;
  transitionAnimation = '';

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    const elementInView: Element = entries[0].target
    if(entries[0].isIntersecting) {
      const heroSectionImage: Element = entries[0].target.children[0].children[0];
      const heroSectionText: Element = entries[0].target.children[1];
      heroSectionImage.classList.remove('opacity-0');
      heroSectionImage.classList.add(this.transitionAnimation);
      setTimeout(() => {
        heroSectionText.classList.remove('opacity-0');
        heroSectionText.classList.add(this.transitionAnimation);
      }, 200);
      this.observer.unobserve(elementInView)
    }
  }, {threshold: [0.3, 0.4, 0.5, 0.6]})

  constructor(protected sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.prevId = this.sharedService.pageNavs.map(page => page.path).indexOf(this.sharedService.previousPath);
    this.currId = this.sharedService.pageNavs.map(page => page.path).indexOf(this.sharedService.currPath);
    this.sharedService.nextPage = this.currId < 4 ? this.sharedService.pageNavs[this.currId + 1].path : '';
    this.sharedService.prevPage = this.currId > 0 ? this.sharedService.pageNavs[this.currId - 1].path : '';
    this.transitionAnimation = this.currId >= this.prevId ? 'slide-in-left' : 'slide-in-right';
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.heroSectionContainer.nativeElement);
  }
}
