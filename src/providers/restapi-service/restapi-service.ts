import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RestapiServiceProvider {
  err: any;
  data: any;
  apiUrl = 'https://makevoid-skicams.p.mashape.com/cams.json';
  constructor(public http: Http) {
  }

  headers(): RequestOptions {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.append('X-Mashape-Key', 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw');
    return new RequestOptions({headers: headers});
  }

  getCams() {
    return new Promise(resolve => {
        this.http.get(this.apiUrl, this.headers()).pipe(
          map(res => res.json()))
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          }, (err) => {
            this.err = err;
            resolve(this.err);
          });
    });
  }
}
