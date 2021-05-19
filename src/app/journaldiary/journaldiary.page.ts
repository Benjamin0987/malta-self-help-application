import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ViewWillLeave } from '@ionic/angular';
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

  public id: number;

  // public journeyImg1: string = null;
  // public journeyImg2: string = null;
  // public journeyImg3: string = null;
  // public journeyTitle: string = " ";
  // public journeyDescr: string = " ";
  


  constructor(
    private modalCtrl: ModalController,
    private albumService: AlbumService,
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    // this.journeyImg1 = await this.storageService.get('journeyImg1');
    // this.journeyImg2 = await this.storageService.get('journeyImg2');
    // this.journeyImg3 = await this.storageService.get('journeyImg3');
    // this.journeyTitle = await this.storageService.get('journeyTitle');
    // this.journeyDescr = await this.storageService.get('journeyDescr');
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id !== undefined)
    {
      const journeys = await this.storageService.get('journey');
      this.journey = journeys[this.id];
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


