import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
