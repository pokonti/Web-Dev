import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesByCompanyComponent } from './vacancies-by-company/vacancies-by-company.component';

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
        path: 'companies',
        component: CompaniesComponent
    },
    {
        path: 'vacancies',
        component: VacanciesComponent
    },
    {
        path: 'companies/:id/vacancies',
        component: VacanciesByCompanyComponent
    },
    {
        path: '**', 
        component: NotFoundComponent
    },
];
