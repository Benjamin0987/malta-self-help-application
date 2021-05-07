import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vallettamaltapage',
  templateUrl: './vallettamaltapage.page.html',
  styleUrls: ['./vallettamaltapage.page.scss'],
})
export class VallettamaltapagePage implements OnInit {

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
