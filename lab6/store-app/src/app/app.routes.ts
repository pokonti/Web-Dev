import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { PhotosComponent } from './photos/photos.component';

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
        path: 'albums',
        component: AlbumsComponent
    },
    {
        path: 'albums/:id',
        component: AlbumDetailComponent
    },
    {
        path: 'albums/:id/photos',
        component: PhotosComponent
    },
    {
        path: '**', 
        component: NotFoundComponent
    }
];
