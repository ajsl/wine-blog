import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategories } from '../models/categoies';
import { IPost } from '../models/post';
import { WpService } from '../wp-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId = +this.route.snapshot.paramMap.get('id');
  post: IPost;
  categories: ICategories[];
  loaded = false;

  constructor(private WpService: WpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPost();
    
  }

  getPost() {
    this.WpService.getPost(this.postId).subscribe((response) => {
      this.post = response;
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
    return this.categories?.find((x) => x.id === cat[0]).name;
  }
}
