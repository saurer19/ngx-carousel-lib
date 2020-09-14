import { TestBed } from '@angular/core/testing';

import { NgxCarouselLibService } from './ngx-carousel-lib.service';

describe('NgxCarouselLibService', () => {
  let service: NgxCarouselLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCarouselLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
