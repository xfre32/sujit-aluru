import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
    {
        path: '',
        component: SkillsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class SkillsRoutingModule { }

@NgModule({
  declarations: [SkillsComponent],
  imports: [SharedModule, SkillsRoutingModule],
  providers: []
})
export class SkillsModule { }
