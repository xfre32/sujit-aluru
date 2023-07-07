import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    let cardInView: Element | null = document.querySelector('#resume-preview');
    if(cardInView)
      this.observer.observe(cardInView);
  }

  imgPath: string = 'resume_img.png';
  heroText: string = "Here's my Résumé";
  heroDesc: string = 'Curriculum Vitae, as they call it';
  resumeSrc: string = '../../assets/resume/resume.png';
  resumePdfSrc: string = '../../assets/resume/resume.pdf';

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    let cardInView: Element = entries[0].target;
    if(entries[0].isIntersecting) {
      cardInView.classList.add('shadow-lg');
      cardInView.classList.replace('p-4', 'p-3');
    }
    else {
      cardInView.classList.remove('shadow-lg');
      cardInView.classList.replace('p-3', 'p-4');
    }
  }, {threshold: [0.2, 0.5, 0.8, 1]});

}
