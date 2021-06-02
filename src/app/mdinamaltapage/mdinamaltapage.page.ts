import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { GalleryPage } from '../gallery/gallery.page';
import { InfoService } from '../services/info.service';
import { StorageService } from '../services/storage.service';
import { Information } from '../struct/information';

@Component({
  selector: 'app-mdinamaltapage',
  templateUrl: './mdinamaltapage.page.html',
  styleUrls: ['./mdinamaltapage.page.scss'],
})
export class MdinamaltapagePage implements OnInit {

  information: Information =  { id: 'mdina', headerTitle: 'Mdina Malta',  photo: 'photo', pageTitle: 'Mdina', subTitle: 'Please work', text: [], externalLink: "Link to External Page" };
  informationlink: Information[] = [];
  isSaved: boolean = false;
  WeatherData:any;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private infoService: InfoService,
    ) { }

  ngOnInit()
  {
    const id = this.route.snapshot.params.id;
    this.information = this.infoService.get(id) as Information;
    this.informationlink = this.infoService.get() as Information[];
    this.informationlink = this.informationlink.filter(item => item.id != id).sort((a, b) => Math.random() - 0.5).slice(0, 3);

    this.isSaved = this.infoService.saved.indexOf(this.information.id) > -1;

    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    //console.log(this.WeatherData);
  }

  async openGallery()
    {
      const modal = await this.modalCtrl.create({
        component: GalleryPage
      });
      modal.present();
    }

  async save(id: string)
  {
    this.infoService.save(id);
    this.isSaved = this.infoService.saved.indexOf(this.information.id) > -1;
  }

  getWeatherData()
  {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Valletta&appid=c4a510462e45f650fe4c02176c3a47a9')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    //let data = JSON.parse('{"coord":{"lon":-107.8743,"lat":48.3597},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":277.15,"feels_like":274.8,"temp_min":277.15,"temp_max":277.15,"pressure":1017,"humidity":81},"visibility":10000,"wind":{"speed":2.57,"deg":200},"clouds":{"all":1},"dt":1622285255,"sys":{"type":1,"id":4824,"country":"US","sunrise":1622287005,"sunset":1622343691},"timezone":-21600,"id":5664486,"name":"Malta","cod":200}')
    //this.setWeatherData(data);
  }

  setWeatherData(data)
  {
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
  }

  
}
