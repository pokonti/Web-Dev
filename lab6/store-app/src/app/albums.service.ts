import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Photo } from './albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  getAlbums(){
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number){
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }

  createAlbum(album: Album){
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(id: number, newTitle: string){
    return this.client.put<Album>(`${this.BASE_URL}/albums/${id}`, {title: newTitle});
  }

  getPhotos(id: number) {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
   }
}
