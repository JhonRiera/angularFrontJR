import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormpersonComponent } from './formperson/formperson.component';
import { FormpetComponent } from './formpet/formpet.component';

export const routes: Routes = [
    { path: 'person', component: FormpersonComponent },
    { path: 'pet', component: FormpetComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];
