import { Injectable } from '@angular/core';

import {
  Http,
  Headers,
} from "@angular/http";
import {
  Observable,
} from 'rxjs/Observable';
import {
  Friend,
} from "./friend.model";
import 'rxjs/add/operator/map';

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get('http://localhost:3000/friends')
      .map(res => res.json());
  }

}
