import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { InfoService } from '../services/info.service';
import { Information } from '../struct/information';

@Component({
  selector: 'app-mdinamaltapage',
  templateUrl: './mdinamaltapage.page.html',
  styleUrls: ['./mdinamaltapage.page.scss'],
})
export class MdinamaltapagePage implements OnInit {

  information: Information =  { id: 'mdina', headerTitle: 'Mdina Malta',  photo: 'photo', pageTitle: 'Mdina', subTitle: 'Please work', text: [], externalLink: "Link to External Page" };
  informationlink: Information[] = [];

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private infoService: InfoService
  ) { }

  ngOnInit()
  {
    const id = this.route.snapshot.params.id;
    this.information = this.infoService.get(id) as Information;
    this.informationlink = this.infoService.get() as Information[];
  
    this.informationlink = this.informationlink.filter(item => item.id != id).sort((a, b) => Math.random() - 0.5).slice(0, 3);
  }

  /*
  async quit()
  {
    const alert = await this.alertCtrl.create({
      header: "Saved List",
      message: "Would you like to add this to your saved list?",
      buttons: [
        {
          text: "No",
          role: 'cancel'
        },
        {
          text: "Yes",
          handler: () => {
            this.router.navigateByUrl('tabs/saved', { replaceUrl: true });
          }
        }
      ]
    });
    
    alert.present();
  }
*/
  async openGallery()
    {
      const modal = await this.modalCtrl.create({
        component: GalleryPage
      });
      modal.present();
    }
  async savedItem()
  {
    
  }
}
