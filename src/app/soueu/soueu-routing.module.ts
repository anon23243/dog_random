import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoueuPage } from './soueu.page';

const routes: Routes = [
  {
    path: '',
    component: SoueuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoueuPageRoutingModule {}
