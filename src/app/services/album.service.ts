import { Injectable } from '@angular/core';
import { Photo } from '../struct/gallery';
import { GALLERY } from '../struct/gallery-data';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AlbumService 
{
  photos: Photo[] = GALLERY;

  constructor() { }

  /**
   * Returns the photo gallery.
   */
  getPhotos(): Photo[]
  {
    return this.photos;
  }


  /**
   * Takes a photo
   */
  async takePhoto()
  {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
