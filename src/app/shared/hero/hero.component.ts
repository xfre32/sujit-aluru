import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let heroSectionImage: Element | null = document.querySelector('img.hero-section');
    let heroSectionPassage: Element | null = document.querySelector('div.hero-section');
    heroSectionImage?.classList.add('hero-section-animate');
    setTimeout(() => {
      heroSectionPassage?.classList.remove('opacity-0');
      heroSectionPassage?.classList.add('hero-section-animate');
    }, 300)
  }
}
