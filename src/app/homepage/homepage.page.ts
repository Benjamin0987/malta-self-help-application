import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { StorageService } from '../services/storage.service';
import { JourneyItem } from '../struct/journey';
import { JournaldiaryPage } from '../journaldiary/journaldiary.page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  journey: JourneyItem[] = [];
  @Input('id') id: number = null;
  
  constructor(
    private modalCtrl: ModalController,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  async openGallery()
    {
      const modal = await this.modalCtrl.create({
        component: GalleryPage
      });

      modal.present();
    }

    async openJournal(id?: number)
    {
      const modal = await this.modalCtrl.create({
        component: JournaldiaryPage,
        componentProps: { id: id }
      });
  
      modal.onWillDismiss().then(async (value) => {
        this.journey = await this.storageService.get('journey') || [];
      });
  
      modal.present();
    }

}
