import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";
import {SharedService} from "./shared/services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.sharedService.isScrolling = window.scrollY !== 0;
  }

  @HostListener('window:scrollend', ['$event'])
  onScrollEnd() {
    this.sharedService.isScrolling = false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'ArrowLeft' && this.sharedService.prevPage) {
      this.router.navigate([this.sharedService.prevPage]).then(r => r);
    }
    if(event.key === 'ArrowRight' && this.sharedService.nextPage) {
      this.router.navigate([this.sharedService.nextPage]).then(r => r);
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event): void => {
      if(event instanceof NavigationEnd) {
        this.sharedService.previousPath = this.sharedService.currPath;
        const path = event.url.split('/')[1]
        this.sharedService.currPath = path === "" ? "home" : path
      }
    });
  }

}
