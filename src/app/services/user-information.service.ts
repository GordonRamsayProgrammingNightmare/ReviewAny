import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInformationService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

}
