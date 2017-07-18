import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { Injectable } from '@angular/core';
import { FriendsService } from '../../shared/friends.service';

// This also makes it Injectable
@Component({
  selector: 'app-show-person',
  templateUrl: 'show-person.component.html',
  styleUrls: ['show-person.component.css'],
})

export class ShowPersonComponent implements OnInit {

  @Input() friend: Friend;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private friendService: FriendsService) { }


  ngOnInit() { }


  onToggleLike() {
    this.friend.fav = !this.friend.fav;

    this.friendService.saveFriend(this.friend).subscribe(friend => {
      this.notifyParent.emit(friend);
    });

  }

}
