import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

const client_id = 'dd78ad563f3b4370a1caae2408ab8ad8';
const pass = 'ee4a6f720dca4c05a776a4dbd720c207';
const callback = 'http://localhost:4200/';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  items: any;
  link = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${client_id}&display=popup&redirect_uri=${callback}`;
  access_token: string;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.access_token = this.apiService.access_token;
    if (this.route.snapshot.fragment) {
      this.route.fragment.subscribe(
        (fragment) => {
          this.access_token = new URLSearchParams(fragment).get('access_token');
        }
      );
    }
    if (this.access_token) {
      this.apiService.access_token = this.access_token;
      this.apiService.getDirectory().subscribe(
        (res) => {
          this.items = res['_embedded'].items;
          console.log(this.items);
        }
      );
    }
    // this.apiService.oAuth().subscribe();
  }




}
