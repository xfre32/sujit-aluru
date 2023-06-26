import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";


const routes: Routes = [
    {
        path: '',
        component: ResumeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class ResumeRoutingModule { }

@NgModule({
  declarations: [ResumeComponent],
  imports: [SharedModule, ResumeRoutingModule, NgOptimizedImage],
  providers: []
})
export class ResumeModule { }
