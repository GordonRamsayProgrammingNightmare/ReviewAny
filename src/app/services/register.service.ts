import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  private serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http.post(
      this.serverUrl + 'api/auth/register',
      JSON.stringify({ username: username, password: password }),
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    )
    .map((response: Response) => {
      console.log(response);
    });
  }
}
