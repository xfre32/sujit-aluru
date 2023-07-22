import { Injectable } from '@angular/core';
import {IPageNavDetail} from "../models/custom-models.interface";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  thisYear: number = new Date().getFullYear();
  currPath = '';
  previousPath = '';
  scrolled = false;

  pageNavs: IPageNavDetail[] = [
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

}