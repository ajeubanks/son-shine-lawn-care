import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Son Shine Lawn Care' },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services | Son Shine Lawn Care',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us | Son Shine Lawn Care',
  },
  { path: '**', redirectTo: '' },
];
