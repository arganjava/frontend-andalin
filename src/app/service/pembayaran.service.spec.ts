import { TestBed, inject } from '@angular/core/testing';

import { PembayaranService } from './pembayaran.service';

describe('PembayaranService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PembayaranService]
    });
  });

  it('should be created', inject([PembayaranService], (service: PembayaranService) => {
    expect(service).toBeTruthy();
  }));
});
