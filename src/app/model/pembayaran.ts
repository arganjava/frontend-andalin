import {User} from './user';
import {Pelajaran} from './pelajaran';

export class Pembayaran {
  biaya: number;
  owner: User;
  pelajaran: Pelajaran;
  ispaid: string;
  id: number;
}
