import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';

=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: HomePage
=======
    component: HomePage,
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
=======
  exports: [RouterModule]
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
})
export class HomePageRoutingModule {}
