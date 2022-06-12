import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  pageTitle : string = 'View Posts Here!';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      for (let i=0; i<res.length; i++){
        res[i]['vote'] = 0;
      }
      
      this.posts = res;
    });
  }

  hidePost(post: Post) : void {
    this.posts = this.posts.filter(po => po.id !== post.id);
  }

  addPost(post: Post) : void {
    this.posts.unshift(post);
  }

}
