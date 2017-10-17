import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FakeService {
  constructor (
    private http: Http
  ) {}

  getPosts() {
    //TODO
  }

  getOnePost(postId) {
    //TODO
  }

}
