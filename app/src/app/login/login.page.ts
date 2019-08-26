import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data:any = {
    email: "",
    password: "",
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    if(this.data.email == "" || this.data.password == "") {
      alert('Please provide email and password');
      return;
    }

    this.authService.login(this.data);
  }

}
