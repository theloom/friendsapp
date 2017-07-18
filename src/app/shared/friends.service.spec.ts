import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FriendsService } from './friends.service';

describe('FriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsService]
    });
  });

  it('should be created', inject([FriendsService], (service: FriendsService) => {
    expect(service).toBeTruthy();
  }));
});
