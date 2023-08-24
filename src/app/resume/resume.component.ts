import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  @ViewChild('#resumePreview') cardInView!: ElementRef;

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    if(this.cardInView.nativeElement)
      this.observer.observe(this.cardInView.nativeElement);
  }

  imgPath = 'resume_img.png';
  heroText = "Here's my Résumé";
  heroDesc = 'Curriculum Vitae, as they call it';
  resumeSrc = 'assets/resume/resume.png';
  resumePdfSrc = 'assets/resume/resume.pdf';

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    const cardInView: Element = entries[0].target;
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
