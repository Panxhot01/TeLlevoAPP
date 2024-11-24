import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCondPage } from './info-cond.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCondPageRoutingModule {}
