import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
=======
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    HomePageRoutingModule,
    SharedModule
=======
    HomePageRoutingModule
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
