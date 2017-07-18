import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { NgModel } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friends.service';

// This also makes it Injectable
@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})

export class PersonListComponent implements OnInit {
  constructor(private friendService: FriendsService) { }

  friends: Friend[] = [];

  genders: string[] = ["male", "female", "unknown", "cat"];

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

  selectedFriend: Friend;
  newFriendFirst: string = "";
  newFriendLast: string = "";
  newFriendGender: string = "unknown";
  newFriend: Friend = {
    "id": null,
    "first_name": "",
    "last_name": "",
    "gender": "unknown",
    "fav": false
  };
  displayBanner: boolean = false;
  displayAddSuccess: boolean = false;
  updatedFriend: Friend;

  onSelectFriend = function (selected) {
    this.selectedFriend = selected;
  };

  addFriend = function () {
    this.newFriend.id = this.friends.length + 1;
    this.friendService.addFriend(this.newFriend).subscribe(f => this.onSuccessfulAdd(f));
  };

  onUpdate(friend: Friend) {
    this.displayBanner = true;
    this.updatedFriend = friend;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  };

  onSuccessfulAdd(friend: Friend) {
    this.friends.push(friend);
    this.displayAddSuccess = true;
    this.updatedFriend = friend;
    setTimeout(() => {
      this.displayAddSuccess = false;
    }, 3000);
  };
}
