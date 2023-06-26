import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() heroImage!: string;
  @Input() heroText!: string;
  @Input() heroDesc!: string;
  @Input() heroImageLeft!: boolean

  constructor() {  }

  ngOnInit(): void {
  }

}
