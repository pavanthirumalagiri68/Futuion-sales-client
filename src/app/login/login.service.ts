import { Injectable } from '@angular/core';
import { HttpClientService } from '../config/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Update this URL based on your Docker setup
  private backendUrl = 'http://localhost:8080';

  constructor(private http: HttpClientService) { }

  login(data: any) {
    console.log(data);
    const loginUrl = `${this.backendUrl}/api/user/login`;
    return this.http.login(loginUrl, data);
  }
}

