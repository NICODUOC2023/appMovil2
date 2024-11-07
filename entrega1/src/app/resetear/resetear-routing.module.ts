import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetearPage } from './resetear.page';

const routes: Routes = [
  {
    path: '',
    component: ResetearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetearPageRoutingModule {}
