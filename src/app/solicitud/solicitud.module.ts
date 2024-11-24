import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudPageRoutingModule } from './solicitud-routing.module';

import { SolicitudPage } from './solicitud.page';
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
    SolicitudPageRoutingModule,
    SharedModule
=======
    SolicitudPageRoutingModule
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
  ],
  declarations: [SolicitudPage]
})
export class SolicitudPageModule {}
