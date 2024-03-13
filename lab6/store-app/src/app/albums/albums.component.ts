import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import { Album } from '../albums';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
// import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit{
 
  albums!: Album[];
  loaded: boolean = false;
  newAlbum: Album;
  // latestAlbumId: number = this.albums[this.albums.length-1].id + 1;

  constructor(private albumService: AlbumsService ){ 
    this.newAlbum = {
      id: 101,
      userId: 101,
      title: ''
    }
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  deleteAlbum(id:number){
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted');
    })
  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = {} as Album;
    });
  }
 
}
