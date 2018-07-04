import { Component, OnInit } from '@angular/core';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.css']
})
export class SkicamsComponent implements OnInit {

  place: any = {name: '', cam: ''}
  place2: any = {name: '', cam: ''}
//'Vigo di Fassa', Piani di Bobbio
  cams: Array<any> = []
  constructor(public api: RestapiServiceProvider) {
    this.api.getCams().then(data => {
      for (const place in data) {
        if (data[place].name === 'Vigo di Fassa') {
          this.place.name = data[place].name;
          for (let camera in data[place].cams) {
            this.cams.push(data[place].cams[camera].url);
            // if (data[i].cams[j].name === 'Vista sul centro sportivo') {
            //   this.place.cam = data[i].cams[j].url;
            // }
          }
          
        }
      }
    });
   }

  ngOnInit() {
  }

}
