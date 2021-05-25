import { Component, OnInit } from '@angular/core';
import { Information } from '../struct/information';
import { INFORMATIONS } from '../struct/information-data';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  saved: string[] = ['mdina', 'valletta'];
  information: Information[] = INFORMATIONS;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.information = this.information.filter(item => this.saved.indexOf(item.id) != -1);
    console.log(this.information);
  }

}
