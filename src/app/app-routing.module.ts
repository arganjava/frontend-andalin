import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';
import {PelajaranComponent} from './pelajaran/pelajaran.component';
import {PembayaranComponent} from './pembayaran/pembayaran.component';
import {TransaksiComponent} from './transaksi/transaksi.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'pelajaran', component: PelajaranComponent},
  {path: 'transaksi', component: TransaksiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
