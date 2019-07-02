import { PostsService } from "./../posts.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { postModel } from "../post.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: postModel[] = [];
  postSub: Subscription;
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostsUpdated()
      .subscribe((postObj: postModel[]) => {
        this.posts = postObj;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
