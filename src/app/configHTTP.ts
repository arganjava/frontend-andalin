export class ConfigHTTP {
  baseUrl = 'localhost:1337';
  user = {common: this.baseUrl + '/user'};
  pelajaran = {common: this.baseUrl + '/pelajaran', assignUser: this.baseUrl + '/pelajaran/assignUser'};
}
