import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [SharedModule, ResumeRoutingModule],
  providers: []
})
export class ResumeModule { }
