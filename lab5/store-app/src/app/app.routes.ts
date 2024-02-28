import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppProductsComponent } from './app-products/app-products.component';



export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }, 
    {
        path: 'app',
        component: AppProductsComponent
    }, 
    {
        path: 'tag/:tag',
        component: AppProductsComponent
    },
    {
        path:'search/:searchTerm', 
        component:AppProductsComponent
    }
];

