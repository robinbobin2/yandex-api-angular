import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.sass']
})
export class FolderComponent implements OnInit {
  path: string;
  items: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.getDirectory(params['name']);
      }
    );
  }

  getDirectory(path = '/') {
    this.apiService.getDirectory(path)
      .subscribe(
        (res) => {
          this.items = res['_embedded'].items;
        }
      );
  }

}
