import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestContPage } from './rest-cont.page';

const routes: Routes = [
  {
    path: '',
    component: RestContPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestContPageRoutingModule {}
