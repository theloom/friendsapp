import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { NgModel } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friends.service';

@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})

@Injectable()
export class PersonListComponent implements OnInit {
  constructor(private friendService: FriendsService) { }

  friends: Friend[];

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

  selectedFriend: Friend;
  newFriendFirst: string = "";
  newFriendLast: string = "";
  newFriend: Friend;

  onSelectFriend = function (selected) {
    this.selectedFriend = selected;
  };

  addFriend = function () {
    if (this.newFriendFirst) {
      this.friends.push({
        "id": this.friends.length + 1,
        "first_name": this.newFriendFirst,
        "last_name": this.newFriendLast,
        "gender": "unknown",
      });
    };
  }

}
