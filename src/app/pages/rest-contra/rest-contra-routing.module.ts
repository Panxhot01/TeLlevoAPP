import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestContraPage } from './rest-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RestContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestContraPageRoutingModule {}
