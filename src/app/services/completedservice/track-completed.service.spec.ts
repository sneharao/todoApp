import { TestBed, inject } from '@angular/core/testing';

import { TrackCompletedService } from './track-completed.service';

describe('TrackCompletedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackCompletedService]
    });
  });

  it('should be created', inject([TrackCompletedService], (service: TrackCompletedService) => {
    expect(service).toBeTruthy();
  }));
});
