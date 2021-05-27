import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { StorageService } from '../services/storage.service';
import { Information } from '../struct/information';
import { INFORMATIONS } from '../struct/information-data';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  saved: string[] = ['mdina', 'valletta', 'malta', 'gozo', 'bluelagoon', 'marsaxlokk', 'whereismalta'];
  information: Information[] = INFORMATIONS;

  constructor(
    private storageService: StorageService,
    private infoService: InfoService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter()
  {
    this.information = this.infoService.getSaved();
    console.log(this.information);
  }

}
