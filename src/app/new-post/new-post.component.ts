import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  title : string = '';
  body : string = '';
  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() : void {
    const post: Post = {
      title: this.title,
      body: this.body,
      vote: 0
    }
    this.addPost.emit(post);
    this.title = '';
    this.body = '';
  }

}
