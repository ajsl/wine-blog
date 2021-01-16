import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { IPage } from '../models/page';
import { WpService } from '../wp-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  pageId = 16;
  page: IPage;
  loaded = false;
  constructor(private http: WpService) {}

  ngOnInit(): void {
    this.http.getPage(this.pageId).subscribe(
      (response) => {
        this.page = response;
        this.loaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
