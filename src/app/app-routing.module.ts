import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadComponent } from './components/upload/upload.component';

import { AuthGuard } from './auth.guard';

const appRouter: Routes = [
  { path: '',    component: HomeComponent},
  { path: 'login',   component: LoginComponent},
  { path: 'join',    component: JoinComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload',  component: UploadComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
