import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit 
{
  // The user's name.
  public name: string = "";

  // The user's surname.
  public surname: string = "";

  // The user's email
  public email: string ="";

  // The user's country
  public country: string ="";

  // The user's profile picture
  public avatarSrc: string = null;

  constructor(
    private modalCtrl: ModalController,
    private storageService: StorageService
  ) { }

  async ngOnInit()
  {
    this.name = await this.storageService.get('name');
    this.surname = await this.storageService.get('surname');
    this.email = await this.storageService.get('email'); 
    this.country = await this.storageService.get('country');
    this.avatarSrc = await this.storageService.get('profilePic');
  
  }

  /**
   * Sets the data value for a specified key.
   * @param key The storage key.
   * @param e The input event.
   */
  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }

  async openGallery()
  {
    const modal = await this.modalCtrl.create({
      component: GalleryPage
    });

    modal.onWillDismiss().then(response => {
      if (response.role == 'cancel') return;

      const photo = response.data;

      // For mobile - we can use the filePath
      // this.avatarSrc = photo.filePath;

      // CHROME ONLY - we have to check our photo.
      if (photo.base64Data) this.avatarSrc = photo.base64Data;
      else if (photo.webViewPath) this.avatarSrc = photo.webViewPath;
      else if (photo.filePath) this.avatarSrc = photo.filePath;
      else this.avatarSrc = null;

      this.storageService.set('profilePic', this.avatarSrc);
    });

  modal.present();
  }

}
