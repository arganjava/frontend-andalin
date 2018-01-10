import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {UserComponent} from './user/user.component';
import {PelajaranComponent} from './pelajaran/pelajaran.component';
import {UserService} from './service/user.service';
import {PelajaranService} from './service/pelajaran.service';
import {PembayaranComponent} from './pembayaran/pembayaran.component';
import {PembayaranService} from './service/pembayaran.service';
import {TransaksiComponent} from './transaksi/transaksi.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    PelajaranComponent,
    PembayaranComponent,
    TransaksiComponent
  ],
  providers: [UserService, PelajaranService, PembayaranService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
