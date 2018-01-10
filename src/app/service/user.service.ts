import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigHTTP} from '../configHTTP';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService {
  configHTTP: ConfigHTTP = new ConfigHTTP;
  users: User[] = [
    {id: 11, name: 'Mr. Nice', email: '', role: 'mahasiswa'},
    {id: 12, name: 'Mr. Nice2', email: '', role: 'mahasiswa'}
  ];

  constructor(private http: HttpClient) {
  }

  getUsers(): User[] {
    return this.users;
  }

  save(): User[] {
    return this.users;
  }

  update(): User[] {
    return this.users;
  }

  delete(): User[] {
    return this.users;
  }

}
