import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(
    private locate: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.locate.back();
  }

}
