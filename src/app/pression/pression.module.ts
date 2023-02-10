import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressionPageRoutingModule } from './pression-routing.module';

import { PressionPage } from './pression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressionPageRoutingModule
  ],
  declarations: [PressionPage]
})
export class PressionPageModule {}
