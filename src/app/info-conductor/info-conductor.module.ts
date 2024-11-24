import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoConductorPageRoutingModule } from './info-conductor-routing.module';

import { InfoConductorPage } from './info-conductor.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoConductorPageRoutingModule,
    SharedModule
  ],
  declarations: [InfoConductorPage]
})
export class InfoConductorPageModule {}
