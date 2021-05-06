import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { JourneyItem } from '../struct/journey';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.page.html',
  styleUrls: ['./journals.page.scss'],
})
export class JournalsPage implements OnInit 
{
  journey: JourneyItem[] = [];

  constructor(
    private storageService: StorageService
  ) { }


  async ngOnInit()
  {
    this.journey = await this.storageService.get('journaldiary') || [];
  }

}
