import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController, ViewWillLeave } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { AlbumService } from '../services/album.service';
import { StorageService } from '../services/storage.service';
import { JourneyItem } from '../struct/journey';

@Component({
  selector: 'app-journaldiary',
  templateUrl: './journaldiary.page.html',
  styleUrls: ['./journaldiary.page.scss'],
})

export class JournaldiaryPage implements OnInit {

  public journey: JourneyItem = { title: '', description: '', photos: [] };
  @Input() id: number;

  constructor(
    private modalCtrl: ModalController,
    private albumService: AlbumService,
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    /*if (this.modalCtrl.getTop() == null)
    {
      this.id = this.activatedRoute.snapshot.params.id; // if modal, don't use this
    }
    if (this.id !== undefined)
    {
      const journeys = await this.storageService.get('journey');
      this.journey = journeys[this.id];
    }
    */
    this.id = this.activatedRoute.snapshot.params.id; // if modal, don't use this
    if (this.id !== undefined)
    {
      const journeys = await this.storageService.get('journey');
      this.journey = journeys[this.id];
    }
  }

  back()
  {
    if (this.modalCtrl.getTop())
    {
      this.modalCtrl.dismiss();
    }
    else
    {
      this.navCtrl.back();
    }
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

    async openGallery(index?: number)
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
        if (photo.base64Data)
        {
          if (index != undefined)
            this.journey.photos[index] = photo.base64Data;
          else
            this.journey.photos.push(photo.base64Data);
        }
        else if (photo.webViewPath) 
        {
          if (index != undefined)
            this.journey.photos[index] = photo.webViewPath;
          else
            this.journey.photos.push(photo.webViewPath);
        }
        else if (photo.filePath) 
        {
          if (index != undefined)
            this.journey.photos[index] = photo.filePath;
          else
            this.journey.photos.push(photo.filePath);
        }
        else this.journey.photos = null;
    });

    modal.present();
  }

async quit()
  {
    // This code waits (await) for the alert to be
    // created before moving on.
    const alert = await this.alertCtrl.create({
      header: "Save Progress",
      message: "Would you like to save your Journey?",
      buttons: [
        {
          text: "No",
          role: 'cancel'
        },
        {
          text: "Yes",
          handler: async () => {
            await this.save();
            this.router.navigateByUrl('tabs/journals', { replaceUrl: true });
            //this.back();
          }
        }
      ]
    });
    
    alert.present();
  }

  async savephotos()
  {
    const photos = await this.storageService.get('photos') || [];
    photos.unshift(imageFile);
    await this.storageService.set('photos', photos);
  }
  async save()
  {
    const journey: JourneyItem[] = await this.storageService.get('journey') || [];
    if (this.id === undefined)
    {
      journey.push(this.journey);
    }
    else
    {
      journey[this.id] = this.journey;
    }
    this.storageService.set('journey', journey);
  }

  

}

function imageFile(imageFile: any) {
  throw new Error('Function not implemented.');
}




