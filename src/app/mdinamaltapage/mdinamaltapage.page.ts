import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

    private infoService: InfoService
  ) { }

  ngOnInit()
  {
    const id = this.route.snapshot.params.id;
    this.information = this.infoService.get(id) as Information;
    this.informationlink = this.infoService.get() as Information[];
  }

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
}
