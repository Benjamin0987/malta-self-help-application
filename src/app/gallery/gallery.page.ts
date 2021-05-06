import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Photo } from '../struct/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit
{
  photos: Photo[] = [];

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit()
  {
    this.photos = this.albumService.getPhotos();
  }

  takePhoto()
  {
    this.albumService.takePhoto();
  }
}
