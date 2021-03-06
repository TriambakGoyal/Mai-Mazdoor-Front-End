import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';

import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage,
    children:[
      
    ]
  }
  ,
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
    
  },
  {
    path:'',
    redirectTo:'',
    pathMatch: "full"
  },
  {
    path: 'profile-pic',
    loadChildren: () => import('./profile-pic/profile-pic.module').then( m => m.ProfilePicPageModule)
  }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
