import {Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profilePicPath: string = '../../../assets/profile_img.png'

  constructor(protected sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {}

  headerNav: any[] = this.sharedService.pageNavs;

  getCurrPath() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.sharedService.currPath = event.url.split('/')[1];
      }
    })
  }




}
