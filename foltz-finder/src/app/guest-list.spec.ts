import { TestBed } from '@angular/core/testing';

import { GuestList } from './guest-list';

describe('GuestList', () => {
  let service: GuestList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
