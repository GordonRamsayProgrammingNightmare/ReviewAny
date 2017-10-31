import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const appRouter: Routes = [
  { path: '', component: HomeComponent, canActivate: []},
  { path: '/login', component: LoginComponent}
];

export const router = RouterModule.forRoot(appRouter);
