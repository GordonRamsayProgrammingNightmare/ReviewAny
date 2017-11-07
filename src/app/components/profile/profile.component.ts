import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private locate: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.locate.back();
  }

}
