import { Component, OnInit } from '@angular/core';
import { Friend } from '../shared/friend.model';
import { FriendsService } from "app/shared/friends.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private friendService: FriendsService) { }

  friends: Friend[];

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

  getCats(): number {
    if (this.friends) {
      return this.friends.filter(cat => cat.gender === "cat").length;
    }
    return null;
  }
}
