import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { Album } from '../albums';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loaded!: boolean;
  newTitle!: string;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.newTitle = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> { 
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });

  }

  saveTitle() {
    this.albumService.updateAlbum(this.album.id, this.newTitle).subscribe((response) => {
      this.album.title = response.title;
      this.newTitle = '';
    });
  }

}


