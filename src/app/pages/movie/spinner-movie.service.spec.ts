import { TestBed } from '@angular/core/testing';

import { SpinnerMovieService } from './spinner-movie.service';

describe('SpinnerMovieService', () => {
  let service: SpinnerMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
