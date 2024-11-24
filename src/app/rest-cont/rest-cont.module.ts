import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestContPageRoutingModule } from './rest-cont-routing.module';

import { RestContPage } from './rest-cont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestContPageRoutingModule
  ],
  declarations: [RestContPage]
})
export class RestContPageModule {}
