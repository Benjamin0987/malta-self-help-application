import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit 
{
  // The user's name.
  public name: string = "Benjamin";

  // The user's surname.
  public surname: string = "Magro";

  constructor() { }

  async ngOnInit()
  {
  }
}

