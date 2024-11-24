import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopasajeroPageRoutingModule } from './infopasajero-routing.module';

import { InfopasajeroPage } from './infopasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopasajeroPageRoutingModule
  ],
  declarations: [InfopasajeroPage]
})
export class InfopasajeroPageModule {}
