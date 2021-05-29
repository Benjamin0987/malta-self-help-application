import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Information } from '../struct/information';
import { INFORMATIONS } from '../struct/information-data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService
{
  information: Information[] = [];
  saved: string[] = [];
  //temp: number = 0;

  //private weatherURL = 'http://api.weatherapi.com/v1/current.json?key=71e8bcdd0b124c12a3595653212505&q=Malta&aqi=yes';

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) { }

  async init()
  {
    this.information = await this.storageService.get('information') || INFORMATIONS;
    this.saved = await this.storageService.get('saved') || [];

  //  this.http.get(this.weatherURL).subscribe((data: any) => {
   //   this.temp = data.current.temp_c;
   //   console.log(this.temp);
      
   // });
  }

  get(id?: string)
  {
    if (id === undefined) return this.information;
    return this.information.find(info => info.id == id);
  }

  getSaved(): Information[]
  {
    return this.information.filter(i => this.saved.indexOf(i.id) > -1);
  }
  
  save(id: string)
  {
    // item doesn't exist
    if (this.saved.indexOf(id) == -1)
    {
      this.saved.push(id);
    }
    else
    {
      this.saved = this.saved.filter(i => i != id);
    }

    this.storageService.set('saved', this.saved);
  }
}
