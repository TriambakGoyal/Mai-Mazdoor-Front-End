import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkTabPage } from './work-tab.page';

const routes: Routes = [
  {
    path: '',
    component: WorkTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkTabPageRoutingModule {}
