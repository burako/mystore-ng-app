import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  pageTitle : string = 'View Posts Here!';
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: "My first post",
        body: "Just testing this out!",
        vote: 1
      },
      {
        id: 2,
        title: "What's your favorite front-end framework?",
        body: "My favorite is Angular. What do you enjoy working with?",
        vote: 1
      },
      {
        id: 3,
        title: "ngOnInit is great",
        body: "This lifecycle method gets called automatically upon component initialization!",
        vote: 1
      },
    ];
  }

  hidePost(post: Post) : void {
    this.posts = this.posts.filter(po => po.id !== post.id);
  }

}
