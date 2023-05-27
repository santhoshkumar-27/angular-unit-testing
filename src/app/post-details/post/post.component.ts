import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: post;
  @Output() onDelete: EventEmitter<post> =  new EventEmitter(true);
  deletePost(event: Event) {
    event.stopPropagation();
    this.onDelete.emit(this.post);
  }
}
