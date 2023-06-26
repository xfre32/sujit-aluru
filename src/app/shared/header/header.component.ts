import {Component, HostListener, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profilePicPath: string = '../../../assets/profile_img1.png'

  constructor(protected sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.headerNav[0].icon = 'fa-house';
    this.headerNav[1].icon = 'fa-star';
    this.headerNav[2].icon = 'fa-folder';
    this.headerNav[3].icon = 'fa-medal';
    this.headerNav[4].icon = 'fa-file';
  }

  headerNav: any[] = this.sharedService.pageNavs;

  getCurrPath() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.sharedService.currPath = event.url.split('/')[1];
      }
    })
  }




}
