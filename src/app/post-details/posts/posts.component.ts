import { Component, OnInit } from '@angular/core';
import { VM, post } from '../../models/post.model';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  vm: VM = {
    posts: []
  };
  constructor(
    private postService: PostService,
  ) {
  }
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPost().subscribe((res: post[]) => {
      this.vm.posts = res;
    })
  }

  deletePost(postObj: post) {
    const posts = this.vm.posts.filter((post: post) => post.id !== postObj.id);
    this.vm.posts = [...posts];
    this.postService.deletePost(postObj).subscribe((res: any) => {

    })
  }
}
