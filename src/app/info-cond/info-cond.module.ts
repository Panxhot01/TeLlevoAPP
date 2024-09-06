import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCondPageRoutingModule } from './info-cond-routing.module';

import { InfoCondPage } from './info-cond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCondPageRoutingModule
  ],
  declarations: [InfoCondPage]
})
export class InfoCondPageModule {}
