import {Component} from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { IPageNavDetail } from "../models/custom-models.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  profilePicPath = '../../../assets/profile_img.png'

  constructor(protected sharedService: SharedService,
    private router: Router) { }

  headerNav: IPageNavDetail[] = this.sharedService.pageNavs;

  getCurrPath() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.sharedService.currPath = event.url.split('/')[1];
      }
    })
  }




}
