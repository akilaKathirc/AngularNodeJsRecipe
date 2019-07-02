import { postModel } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private Posts: postModel[] = [];
  private postsUpdated = new Subject<postModel[]>();
  getPosts() {
    return [...this.Posts];
  }

  getPostsUpdated() {
    return this.postsUpdated.asObservable();
  }

  addPosts(titleobj: string, contentobj: string) {
    const post: postModel = { title: titleobj, content: contentobj };
    this.Posts.push(post);
    this.postsUpdated.next([...this.Posts]);
  }
}
