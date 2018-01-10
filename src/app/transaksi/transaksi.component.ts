import {Component, OnInit} from '@angular/core';
import {PelajaranService} from '../service/pelajaran.service';
import {Transaksi} from '../model/transaksi';
import {UserService} from '../service/user.service';
import {Pelajaran} from '../model/pelajaran';
import {User} from '../model/user';
import {PembayaranService} from '../service/pembayaran.service';
import {Pembayaran} from '../model/pembayaran';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {

  transaksi: Transaksi = new Transaksi;
  pelajarans: Pelajaran[];
  pembayarans: Pembayaran[];
  users: Observable<User[]>;

  constructor(private pelajaranService: PelajaranService, private userService: UserService,
              private pembayaranService: PembayaranService) {
    this.pelajarans = pelajaranService.getPelajarans();
    this.users = userService.getUsers();
    this.pembayarans = this.pembayaranService.getPembayarans();
  }

  ngOnInit() {
  }

  assignUser(): void {
    this.pelajaranService.assigUser(this.transaksi);
    this.transaksi = new Transaksi;
  }

  clickBayar(transaksi: Transaksi): void {
    this.transaksi = new Transaksi;
  }

}
