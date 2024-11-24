import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoConductorPage } from './info-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: InfoConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoConductorPageRoutingModule {}
