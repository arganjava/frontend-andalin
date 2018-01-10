import {Component, OnInit} from '@angular/core';
import {PelajaranService} from '../service/pelajaran.service';
import {Pelajaran} from '../model/pelajaran';
import {User} from '../model/user';

@Component({
  selector: 'app-pelajaran',
  templateUrl: './pelajaran.component.html',
  styleUrls: ['./pelajaran.component.css']
})
export class PelajaranComponent implements OnInit {

  pelajarans: Pelajaran[];
  pelajaran: Pelajaran = new Pelajaran;

  constructor(private pelajaranService: PelajaranService) {
  }

  ngOnInit() {
    this.pelajarans = [{id: 1, mataPelajaran: 'ips', jumlahSKS: 2}];
  }

  save(): void {
    this.pelajarans.push(this.pelajaran);
  }

  edit(pelajaran: Pelajaran): void {
    this.pelajaran = pelajaran;
  }

  delete(pelajaran: Pelajaran): void {
    this.pelajarans.push(this.pelajaran);
  }

}
