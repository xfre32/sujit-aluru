import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'portfolio'
  constructor(private router: Router, private sharedService: SharedService) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.sharedService.scrolled = window.scrollY !== 0;
  }
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.sharedService.currPath = event.url.split('/')[1];
      }
    })

  }
}
