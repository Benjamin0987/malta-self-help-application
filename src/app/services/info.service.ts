import { Injectable } from '@angular/core';
import { Information } from '../struct/information';
import { INFORMATIONS } from '../struct/information-data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService
{
  information: Information[] = [];
  
  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.information = await this.storageService.get('information') || INFORMATIONS;
  }

  get(id?: string)
  {
    if (id === undefined) return this.information;
    return this.information.find(info => info.id == id);
  }
}
