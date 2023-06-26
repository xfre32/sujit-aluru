import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  imgPath: string = 'resume_img1.png';
  heroText: string = "Here's my Résumé";
  heroDesc: string = 'Curriculum Vitae, as they call it';
  resumeSrc: string = '../../assets/resume/resume.png';
  resumePdfSrc: string = '../../assets/resume/resume.pdf';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
