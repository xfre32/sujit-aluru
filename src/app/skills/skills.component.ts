import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  imgPath: string = 'skills_img.png';
  heroText: string = 'My Skills & Proficiency';
  heroDesc: string = 'in Web Design & Development';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
