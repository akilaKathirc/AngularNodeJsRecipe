import { postModel } from "./../post.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  public inputTitle: string = "";
  public inputContent: string = "";
  @Output() postCreated = new EventEmitter<postModel>();
  constructor(public postsService: PostsService) {}

  ngOnInit() {}

  onSavePost(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    this.postsService.addPosts(formData.value.title, formData.value.content);
    formData.reset();
  }
}
