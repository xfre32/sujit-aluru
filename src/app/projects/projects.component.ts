import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  imgPath: string = 'projects_img.png';
  heroText: string = 'My Projects';
  heroDesc: string = 'some cool, some dumb, but I loved working every single one';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
