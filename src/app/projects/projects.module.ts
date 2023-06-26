import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class ProjectsRoutingModule { }

@NgModule({
  declarations: [ProjectsComponent],
  imports: [SharedModule, ProjectsRoutingModule],
  providers: []
})
export class ProjectsModule { }
