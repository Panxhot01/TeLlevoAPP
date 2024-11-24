import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPageRoutingModule } from './conductor-routing.module';

import { ConductorPage } from './conductor.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorPageRoutingModule,
    SharedModule
  ],
  declarations: [ConductorPage]
})
export class ConductorPageModule {}
