import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";
import {SharedService} from "./shared/services/shared.service";
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService, private breakpointObserver: BreakpointObserver) {}

  readonly breakpoint$ = this.breakpointObserver.observe(this.sharedService.getBreakpointsToObserve).subscribe(result => {
    console.log(result)
    this.breakpointChanged();
  })

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

  breakpointChanged() {
    if(this.breakpointObserver.isMatched(`(min-width: ${this.sharedService.breakPoints[5].minWidth}px)`)) {
      console.log(this.sharedService.breakPoints[5].minWidth)
    }
    else if(this.breakpointObserver.isMatched(`(min-width: ${this.sharedService.breakPoints[4].minWidth}px)`)) {
      console.log(this.sharedService.breakPoints[4].minWidth)
    }
    else if(this.breakpointObserver.isMatched(`(min-width: ${this.sharedService.breakPoints[3].minWidth}px)`)) {
      console.log(this.sharedService.breakPoints[3].minWidth)
    }
    else if(this.breakpointObserver.isMatched(`(min-width: ${this.sharedService.breakPoints[2].minWidth}px)`)) {
      console.log(this.sharedService.breakPoints[2].minWidth)
    }
    else if(this.breakpointObserver.isMatched(`(min-width: ${this.sharedService.breakPoints[1].minWidth}px)`)) {
      console.log(this.sharedService.breakPoints[1].minWidth)
    }
    else if(this.breakpointObserver.isMatched(`(max-width: ${this.sharedService.breakPoints[0].maxWidth}px)`)) {
      console.log(this.sharedService.breakPoints[0].maxWidth)
    }
  }

}
