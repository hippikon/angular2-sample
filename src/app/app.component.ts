import { Post } from './domain/post';
import { FakeService } from './shared/fake.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fakeService: FakeService) {}
  posts: Post[];
  postId: String;

  loadPosts() {
    // TODO
  }

  loadOnePost() {
    //TODO
    console.log(this.posts);
  }
}
