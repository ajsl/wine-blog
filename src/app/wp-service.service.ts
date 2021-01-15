import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { IPost } from './models/post';
import { ICategories } from './models/categoies';

@Injectable({
  providedIn: 'root'
})
export class WpService {
  baseUrl = "http://cms.ajsleith.com/wp-json/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.baseUrl + 'wp/v2/posts?_embed',{
      observe: 'response'
    })
    .pipe(
      map((response) => {
        return response.body;
      })
    );
  }
  getPost(id: number): Observable<IPost>{
    return this.http.get<IPost>(this.baseUrl + 'wp/v2/posts/' + id + '?_embed')
  }
  getCategories(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>(this.baseUrl + 'wp/v2/categories');
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
