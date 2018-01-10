import {Injectable} from '@angular/core';
import {Pembayaran} from '../model/pembayaran';

@Injectable()
export class PembayaranService {


  pembayarans: Pembayaran[];

  constructor() {
  }


  getPembayarans(): Pembayaran[] {

    return this.pembayarans;
  }


}
