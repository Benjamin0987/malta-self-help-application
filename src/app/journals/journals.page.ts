import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { JourneyItem } from '../struct/journey';


@Component({
  selector: 'app-journals',
  templateUrl: './journals.page.html',
  styleUrls: ['./journals.page.scss'],
})
export class JournalsPage
{
  journey: JourneyItem[] = [];
  @Input('id') id: number = null;

  constructor(
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute
    
  ) { }


  async ionViewWillEnter()
  {
    this.journey = await this.storageService.get('journey') || [];
    
    if (this.id == null)
    {
      this.id = this.route.snapshot.params['id'];
    }

    console.log('reloading');
    
  }

  async delete(index: number)
  {
    // remove an item from the history in this component.
    this.journey.splice(index, 1);
    
    // write it to the database.
    await this.storageService.set('journey', this.journey);

    // Show a confirmation message.
    
  }

  async clear()
  {
    const alert = await this.alertCtrl.create({
      header: "Are you sure?",
      message: "Deleting your journals is a permanent action and cannot be undone.",
      buttons: [
        {
          text: "No",
          role: 'cancel'
        },
        {
          text: "Yes",
          handler: async () => {
            await this.storageService.remove('journey');
            this.journey = await this.storageService.get('journey') || [];
          }
        }
      ]
    });

}
}
