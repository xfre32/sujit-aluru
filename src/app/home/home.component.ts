import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  imgPath: string = 'home_img1.png';
  heroText: string = "Hello, I'm Sujit Aluru";
  heroDesc: string = "Web Designer & Frontend Developer"



  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
