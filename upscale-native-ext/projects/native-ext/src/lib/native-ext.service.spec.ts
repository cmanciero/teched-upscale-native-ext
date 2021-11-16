import { TestBed } from '@angular/core/testing';

import { NativeExtService } from './native-ext.service';

describe('NativeExtService', () => {
  let service: NativeExtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeExtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
