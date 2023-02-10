import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlucosePageRoutingModule } from './glucose-routing.module';

import { GlucosePage } from './glucose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucosePageRoutingModule
  ],
  declarations: [GlucosePage]
})
export class GlucosePageModule {}
