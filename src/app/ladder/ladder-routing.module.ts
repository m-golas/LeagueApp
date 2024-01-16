import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsLedderPageComponent } from './containers/teams-ledder-page/teams-ledder-page.component';
import { LadderContainerComponent } from './containers/ladder-container/ladder-container.component';

const routes: Routes = [
  {
    path: '',
    component: LadderContainerComponent,
    children: [
      {
        path: '',
        component: TeamsLedderPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadderRoutingModule {}
