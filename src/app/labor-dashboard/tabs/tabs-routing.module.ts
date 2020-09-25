import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: "home-tab",
        children: [
          {
            path: "",
            loadChildren: () => import('./home-tab/home-tab.module').then(m => m.HomeTabPageModule)
          }
        ]
      },
      {
        path: "work-tab",
        children: [
          {
            path: "",
            loadChildren: () => import('./work-tab/work-tab.module').then(m => m.WorkTabPageModule)
          }
        ]
      },
      {
        path: "setting-tab",
        children: [
          {
            path: "",
            loadChildren: () => import('./setting-tab/setting-tab.module').then(m => m.SettingTabPageModule)
          }
        ]
      },
      {
        path: "job-details",
        children: [
          {
            path: "",
            loadChildren: () => import('./job-details/job-details.module').then( m => m.JobDetailsPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "home-tab",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "home-tab",
    pathMatch: "full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
