import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService implements OnInit {

  private serverUrl = 'http://localhost:3000';
  public token: string;

  constructor( private http: HttpClient
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

  }

  login(username: string, password: string): Observable<boolean> {
    console.log(username, password);
    return this.http.post(this.serverUrl + '/api/auth/login',
        JSON.stringify({ username: username, password: password}),
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          // need to know what to receive (token, user info)
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          return true;
        } else {
          return false;
        }
      });
  }


  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
