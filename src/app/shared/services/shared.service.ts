import { Injectable } from '@angular/core';
import {IBreakPoints, IPageNavDetail} from "../models/custom-models.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  thisYear: number = new Date().getFullYear();
  currPath = '';
  previousPath = '';
  nextPage = '';
  prevPage = '';
  isScrolling = false;
  private scrollRequiredSubject = new BehaviorSubject<boolean>(false);
  scrollRequired$ = this.scrollRequiredSubject.asObservable();

  pageNavs: IPageNavDetail[] = [
    {
      path: 'home',
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

  breakPoints: IBreakPoints[] = [
    {
      minWidth: null,
      maxWidth: 575,
      bp: 'xs'
    },
    {
      minWidth: 576,
      maxWidth: 767,
      bp: 'sm'
    },
    {
      minWidth: 768,
      maxWidth: 991,
      bp: 'md'
    },
    {
      minWidth: 992,
      maxWidth: 1199,
      bp: 'lg'
    },
    {
      minWidth: 1200,
      maxWidth: 1399,
      bp: 'xl'
    },
    {
      minWidth: 1400,
      maxWidth: null,
      bp: 'xxl'
    }
  ]

  get getBreakpointsToObserve() {
    return this.breakPoints.map((bp: IBreakPoints) => bp.minWidth ? `(min-width: ${bp.minWidth}px)` : `(max-width: ${bp.maxWidth}px)`
    )
  }

  updateScrollStatus(status: boolean) {
    this.scrollRequiredSubject.next(status);
  }

  scrollIntoView(targetComponent: Element) {
    this.scrollRequired$.subscribe((status) => {
      if(status) {
        targetComponent.scrollIntoView({behavior: "smooth"})
        this.updateScrollStatus(false);
      }
    })
  }
}
