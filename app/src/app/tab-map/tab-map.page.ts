import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from '../server-info';
declare var google;

@Component({
  selector: 'app-tab-map',
  templateUrl: './tab-map.page.html',
  styleUrls: ['./tab-map.page.scss'],
})
export class TabMapPage implements OnInit {

  map: any;
  image: any;
  images: any = [];

  constructor(private http: HttpClient) { 
    
    setTimeout(() => {

      this.refresh();

    }, 2000);
  }

  ngOnInit() {
    this.refresh();
  }

  ionViewDidEnter() {
    this.refresh();
  }

  refresh() {
    
    this.http.get( ServerInfo.ServerUrl + '/api/get-images')
      .subscribe(images => {
        this.googleMap();
        this.images = images;
        this.addImagesMarkers();
      });
  }

  googleMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 0,
      center: {lat: -33, lng: 151}
    });

    // this.image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    // new google.maps.Marker({
    //   position: {lat: -33.890, lng: 151.274},
    //   map: this.map,
    //   icon: this.image,
    // });

    // new google.maps.Marker({
    //   position: {lat: -40.890, lng: 161.274},
    //   map: this.map,
    //   icon: this.image
    // });
  }

  addImagesMarkers () {
    this.images.forEach(image => {
      let imageUrl = ServerInfo.ServerUrl + '/' + image['image_path'];
      console.log(imageUrl);
      
      new google.maps.Marker({
        position: {lat: +image['lat'], lng: +image['long']},
        map: this.map,
        icon: {
          url: imageUrl,
          scaledSize: new google.maps.Size(50, 50) 
        },
      });
    });
  }
}
