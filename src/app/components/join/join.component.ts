import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(
    private locate: Location,
    private registers: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.locate.back();
  }

  register() {
    this.loading = true;
    this.registers.register(this.model.username, this.model.password)
      .subscribe(result => {
        return true;
      });
  }

}
