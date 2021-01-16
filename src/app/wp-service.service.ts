import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { IPost } from './models/post';
import { ICategories } from './models/categoies';
import { IPage } from './models/page';

@Injectable({
  providedIn: 'root'
})
export class WpService {
  baseUrl = "http://cms.ajsleith.com/wp-json/wp/v2/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.baseUrl + 'posts?_embed',{
      observe: 'response'
    })
    .pipe(
      map((response) => {
        return response.body;
      })
    );
  }
  getPost(id: number): Observable<IPost>{
    return this.http.get<IPost>(this.baseUrl + 'posts/' + id + '?_embed');
  }
  getCategories(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>(this.baseUrl + 'categories');
  }
  getPage(id: number): Observable<IPage>{
    return this.http.get<IPage>(this.baseUrl + 'pages/' + id + '?_embed');
  }

  // getCategories(): Observable<ICategories[]> {
  //   return this.http.get<ICategories[]>(this.baseUrl + 'wp/v2/categories', {
  //     observe: 'response'
  //   })
  //   .pipe(
  //     map((response) => {
  //       return response.body
  //     })
  //   )
  // }

}
