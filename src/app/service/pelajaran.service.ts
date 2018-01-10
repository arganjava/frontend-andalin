import {Injectable} from '@angular/core';
import {Pelajaran} from '../model/pelajaran';
import {Transaksi} from '../model/transaksi';

@Injectable()
export class PelajaranService {


  pelajarans: Pelajaran[] = [
    {id: 11, jumlahSKS: 23, mataPelajaran: 'ips'},
    {id: 11, jumlahSKS: 23, mataPelajaran: 'ips'}

  ];

  constructor() {
  }

  getPelajarans(): Pelajaran[] {
    return this.pelajarans;
  }

  save(): Pelajaran[] {
    return this.pelajarans;
  }

  update(): Pelajaran[] {
    return this.pelajarans;
  }

  delete(): Pelajaran[] {
    return this.pelajarans;
  }

  assigUser(transaksi: Transaksi): Pelajaran[] {
    return this.pelajarans;
  }


}

