import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post!: post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postService.getPostById(+id).subscribe(post => this.post = post)
  }
  save() {
    this.postService.updatePost(this.post).subscribe((res: any) => this.goBack());
  }
  goBack() {
    this.location.back();
  }
}
