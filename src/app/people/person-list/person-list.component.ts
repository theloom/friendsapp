import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})

export class PersonListComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  friends: Friend[] = [{
    "id": 1,
    "first_name": "Courtney",
    "last_name": "Davidson",
    "gender": "female",
    "fav": true
  }, {
    "id": 2,
    "first_name": "Jooka",
    "last_name": "Davidson",
    "gender": "male",
    "fav": true
  }, {
    "id": 3,
    "first_name": "Sampson",
    "last_name": "Davidson",
    "gender": "male",
    "fav": true
  }];

  testFriends = ["Courtney", "Kim", "Sampson", "Jooka"];
  selectedFriend: Friend;
  newFriendFirst: string = "";
  newFriendLast: string = "";

  onSelectFriend = function (selected) {
    this.selectedFriend = selected;
  };

  addFriend = function () {

    this.friends.push({
      "id": this.friends.length + 1,
      "first_name": this.newFriendFirst,
      "last_name": this.newFriendLast,
      "gender": "unknown",
    });

    /*
    this.friends.push({
      "id": this.friends.length + 1,
      "first_name": "Sampson",
      "last_name": "Davidson",
      "gender": "female",
      "fav": true
    });
    */

  };

}
