import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucosePage } from './glucose.page';

const routes: Routes = [
  {
    path: '',
    component: GlucosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucosePageRoutingModule {}
