import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ApplicationConfig } from '@angular/core';
import { FormpersonComponent } from './formperson/formperson.component';
import { FormpetComponent } from './formpet/formpet.component';

const appRoutes: Routes = [
    { path: 'person', component:  FormpersonComponent},
    { path: 'pet',      component: FormpetComponent },
    { path: '/',      component: HomeComponent },
    { path: '**', component: HomeComponent }
  ];
  export const appConfig: ApplicationConfig = {
      providers: [provideRouter(appRoutes, withDebugTracing())]
  }