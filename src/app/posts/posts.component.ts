import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ICategories } from '../models/categoies';
import { IPost } from '../models/post';
import { WpService } from '../wp-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  displayImg = false;
  posts: IPost[];
  categories: ICategories[];
  image = '';
  imageAlt = '';
  loaded = false
  constructor(private WpService: WpService) {}

  ngOnInit(): void {
    this.getPosts();
    
  }

  getPosts() {
    this.WpService.getPosts().subscribe((respose) => {
      this.posts = respose;
      this.getCategories();
    });
  }
  getCategories() {
    this.WpService.getCategories().subscribe((response) => {
      this.categories = [{ id: 0, name: 'test' }, ...response];
      this.loaded = true;
    });
  }
  assignCategory(cat: number[]) {
    let category = this.categories.find((x) => x.id === cat[0]).name;

    if (category) {
      return category;
    } else {
      return '';
    }
  }
  assignImage(post: IPost) {
    if (post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
    } else {
      return "../assets/glass-428315_640.jpg"
    }
  }
  assignImageAlt(post: IPost) {
    if (post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0].alt_text;
    } else {
      return "wine glass from pixel bay"
    }
    
  }

  checkImage(post: IPost): boolean {
    if (true) {
      return true;
    } else {
      return false;
    }
  }
}
