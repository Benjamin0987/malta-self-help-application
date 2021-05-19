import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Information } from '../struct/information';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit
{

  information: Information[] = [];

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit()
  {
    this.information = this.infoService.get() as Information[];
  }

}
