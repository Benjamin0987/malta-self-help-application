import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-journaldiary',
  templateUrl: './journaldiary.page.html',
  styleUrls: ['./journaldiary.page.scss'],
})
export class JournaldiaryPage implements OnInit {

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
  }

  takePhoto()
  {
    this.albumService.takePhoto();
  }
}
