import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfopasajeroPage } from './infopasajero.page';

const routes: Routes = [
  {
    path: '',
    component: InfopasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopasajeroPageRoutingModule {}
