import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  imgPath = 'projects_img.png';
  heroText = 'My Projects';
  heroDesc = 'some cool, some dumb, but I loved working every single one';

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
