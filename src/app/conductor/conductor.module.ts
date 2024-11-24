import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPageRoutingModule } from './conductor-routing.module';

import { ConductorPage } from './conductor.page';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ConductorPageRoutingModule,
    SharedModule
=======
    ConductorPageRoutingModule
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
  ],
  declarations: [ConductorPage]
})
export class ConductorPageModule {}
