import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  thisYear: number = new Date().getFullYear();
  currPath: string = '';
  scrolled: boolean = false;

  pageNavs: any[] = [
    {
      path: '',
      name: 'Home',
      icon: 'fa-house'
    },
    {
      path: 'skills',
      name: 'Skills',
      icon: 'fa-star'
    },
    {
      path: 'projects',
      name: 'Projects',
      icon: 'fa-folder'
    },
    {
      path: 'achievements',
      name: 'Achievements',
      icon: 'fa-medal'
    },
    {
      path: 'resume',
      name: 'Résumé',
      icon: 'fa-file'
    }
  ]

  constructor() { }

}
