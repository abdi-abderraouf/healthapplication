import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressionPage } from './pression.page';

const routes: Routes = [
  {
    path: '',
    component: PressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressionPageRoutingModule {}
