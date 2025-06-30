import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { HowItWorks } from './how-it-works/how-it-works';

export const routes: Routes = [
    { path:'about-us', component:AboutUs },
    { path:'how-it-works', component:HowItWorks }
];
