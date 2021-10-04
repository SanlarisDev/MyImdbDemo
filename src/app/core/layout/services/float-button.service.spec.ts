import { TestBed } from '@angular/core/testing';

import { FloatButtonService } from './float-button.service';

describe('FloatButtonService', () => {
  let service: FloatButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloatButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
