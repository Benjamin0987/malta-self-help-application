import { Component, OnInit } from '@angular/core';
import { ModalController, ViewWillLeave } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { AlbumService } from '../services/album.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-journaldiary',
  templateUrl: './journaldiary.page.html',
  styleUrls: ['./journaldiary.page.scss'],
})

export class JournaldiaryPage implements OnInit {

  public journeyImg1: string = null;
  public journeyImg2: string = null;
  public journeyImg3: string = null;


  constructor(
    private modalCtrl: ModalController,
    private albumService: AlbumService,
    private storageService: StorageService
  ) { }

  async ngOnInit() {
    this.journeyImg1 = await this.storageService.get('profilePicture');
    this.journeyImg2 = await this.storageService.get('profilePicture2');
    this.journeyImg3 = await this.storageService.get('profilePicture3');
  }

  takePhoto()
  {
    this.albumService.takePhoto();
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
        if (photo.base64Data) this.journeyImg1 = photo.base64Data;
        else if (photo.webViewPath) this.journeyImg1 = photo.webViewPath;
        else if (photo.filePath) this.journeyImg1 = photo.filePath;
        else this.journeyImg1 = null;

        this.storageService.set('profilePicture', this.journeyImg1);
    });

    modal.present();
  }

  async openGallery2()
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
      if (photo.base64Data) this.journeyImg2 = photo.base64Data;
      else if (photo.webViewPath) this.journeyImg2 = photo.webViewPath;
      else if (photo.filePath) this.journeyImg2 = photo.filePath;
      else this.journeyImg2 = null;


      this.storageService.set('profilePicture2', this.journeyImg2);
  });

  modal.present();
}

async openGallery3()
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
    if (photo.base64Data) this.journeyImg3 = photo.base64Data;
    else if (photo.webViewPath) this.journeyImg3 = photo.webViewPath;
    else if (photo.filePath) this.journeyImg3 = photo.filePath;
    else this.journeyImg3 = null;

    this.storageService.set('profilePicture3', this.journeyImg3);
});

modal.present();
}


ionViewWillLeave() {
  console.log('ionViewWillLeave event fired')
}
}
