import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadComponent } from './components/upload/upload.component';

const appRouter: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home',    component: HomeComponent},
  { path: 'login',   component: LoginComponent},
  { path: 'join',    component: JoinComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload',  component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
