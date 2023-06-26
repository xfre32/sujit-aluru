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
      name: 'Home'
    },
    {
      path: 'skills',
      name: 'Skills'
    },
    {
      path: 'projects',
      name: 'Projects'
    },
    {
      path: 'achievements',
      name: 'Achievements'
    },
    {
      path: 'resume',
      name: 'Résumé'
    }
  ]

  constructor() { }

}
