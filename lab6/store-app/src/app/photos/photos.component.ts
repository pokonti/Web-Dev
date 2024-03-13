import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../albums';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{

  photos!: Photo[];
  loaded!: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService){}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos)=>{
        this.photos = photos;
        this.loaded = true;
      });
    });
  }
}
