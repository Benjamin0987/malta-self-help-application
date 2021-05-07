import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-maltaislandpage',
  templateUrl: './maltaislandpage.page.html',
  styleUrls: ['./maltaislandpage.page.scss'],
})
export class MaltaislandpagePage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
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
