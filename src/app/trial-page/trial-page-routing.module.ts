import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialPagePage } from './trial-page.page';

const routes: Routes = [
  {
    path: '',
    component: TrialPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrialPagePageRoutingModule {}
