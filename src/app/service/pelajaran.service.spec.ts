import { TestBed, inject } from '@angular/core/testing';

import { PelajaranService } from './pelajaran.service';

describe('PelajaranService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelajaranService]
    });
  });

  it('should be created', inject([PelajaranService], (service: PelajaranService) => {
    expect(service).toBeTruthy();
  }));
});
