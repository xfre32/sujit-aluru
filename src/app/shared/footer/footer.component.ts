import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import {IFooterList, IPageNavDetail} from "../models/custom-models.interface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(protected sharedService: SharedService) { }

  currentYear: number = this.sharedService.thisYear;
  linkedInUrl = "https://www.linkedin.com/in/sujit-aluru/";
  gitHubUrl = "https://www.github.com/xfre32/";
  twitterUrl = "https://www.twitter.com/sn4ke8a8u/";
  mailPointer = "mailto:sa2ooodec@gmail.com";

  footerWaves: string[] = ['wave1', 'wave2', 'wave3', 'wave4'];

  footerIcons: IFooterList[] = [
    {
      name: 'mail',
      type: 'comm',
      icon: ' fa-square-envelope',
      path: this.mailPointer
    },
    {
      name: 'twitter',
      type: 'media',
      icon: ' fa-square-twitter',
      path: this.twitterUrl
    },
    {
      name: 'github',
      type: 'media',
      icon: ' fa-square-github',
      path: this.gitHubUrl
    },
    {
      name: 'linkedin',
      type: 'media',
      icon: ' fa-linkedin',
      path: this.linkedInUrl
    }
  ]

  footerNav: IPageNavDetail[] = this.sharedService.pageNavs

}
