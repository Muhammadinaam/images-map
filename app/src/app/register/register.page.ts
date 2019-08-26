import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {

    if(this.data.name == '' || this.data.email == '' || this.data.password == '') {
      alert('Please provide Name, Email and Password');
      return;
    }

    if(this.data.password != this.data.password_confirmation) {
      alert('Password and Confirm Password does not match');
      return;
    }

    this.authService.register(this.data);
  }

}
