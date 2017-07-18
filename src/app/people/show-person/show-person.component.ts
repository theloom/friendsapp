import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../shared/friend.model';

@Component({
  selector: 'app-show-person',
  templateUrl: 'show-person.component.html',
  styleUrls: ['show-person.component.css'],
})

export class ShowPersonComponent implements OnInit {

  @Input() friend: Friend;

  constructor() { }

  ngOnInit() { }

  onToggleLike() {
    this.friend.fav = !this.friend.fav;
  }

}
