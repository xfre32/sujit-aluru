import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements.component';

const routes: Routes = [
    {
        path: '',
        component: AchievementsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AchievementsRoutingModule { }

@NgModule({
  declarations: [AchievementsComponent],
  imports: [SharedModule, AchievementsRoutingModule],
  providers: []
})
export class AchievementsModule { }
