import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.auth.logout();
  }

  get diagnostic() { return JSON.stringify(this.model); }

  gotoJoin(): void {
    this.router.navigate(['join']);
  }

  // work on login function
  gotoHome(): void {
    this.router.navigate(['home']);
  }

  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

  loginTest() {
    console.log(this.model.username, this.model.password);
  }
}
