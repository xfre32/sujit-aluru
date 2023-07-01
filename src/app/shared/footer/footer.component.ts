import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  mouseEvent(event: any) {
    // console.log(event)
    // if(event.type === 'mouseover') {
      const anchor = event.relatedTarget;
      console.log(anchor)
      let id = anchor.getAttribute('id');
      console.log(id);
    // }
  }

  currentYear: number = this.sharedService.thisYear;
  mousedOver: boolean = false;
  linkedInUrl: string = "https://www.linkedin.com/in/sujit-aluru/";
  gitHubUrl: string = "https://www.github.com/xfre32/";
  twitterUrl: string = "https://www.twitter.com/sn4ke8a8u/";
  mailPointer: string = "mailto:sa2ooodec@gmail.com";
  telPointer: string = "tel:+919176304528";

  footerWaves: string[] = ['wave1', 'wave2', 'wave3', 'wave4'];

  footerIcons: any[] = [
    // {
    //   type: 'comm',
    //   icon: ' fa-square-phone',
    //   path: this.telPointer
    // },
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

  footerNav: any[] = this.sharedService.pageNavs

}
