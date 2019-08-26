import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from './server-info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn() {
    let access_token = localStorage.getItem('access_token');
    if(access_token != null && access_token != '') {
      return true;
    }
    return false;
  }

  login(data: any) {

    let fd = {
      'grant_type': 'password',
      'client_id':2,
      'client_secret': ServerInfo.PassportSecret,
      'username': data['email'],
      'password': data['password'],
      'scope': '',
    }
    
    this.http.post(ServerInfo.ServerUrl + "/oauth/token", fd)
      .subscribe(resp => {
        if(resp['access_token']) {
          localStorage.setItem('access_token', resp['access_token']);
          this.router.navigate(['/']);
          data['password'] = "";
        }
      },
      error => {
        console.log(error);
        if(error['status'] == 401) {
          alert(error['error']['message']);
        }
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  register(data: { name: string; email: string; password: string; password_confirmation: string; }) {
    this.http.post(ServerInfo.ServerUrl + '/api/register', data)
      .subscribe(resp => {
        alert(resp['message'])
      },
      error => {
        console.log(error);
      });
  }
}
