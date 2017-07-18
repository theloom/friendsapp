import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friends.service';

@Component({
  selector: 'app-show-person',
  templateUrl: 'show-person.component.html',
  styleUrls: ['show-person.component.css'],
})

@Injectable()
export class ShowPersonComponent implements OnInit {

  @Input() friend: Friend;

  constructor(private friendService: FriendsService) { }


  ngOnInit() { }


  onToggleLike() {
    this.friend.fav = !this.friend.fav;

    this.friendService.saveFriend(this.friend).subscribe();

  }

}
