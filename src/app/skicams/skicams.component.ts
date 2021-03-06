import { Component, OnInit } from '@angular/core';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.css']
})
export class SkicamsComponent implements OnInit {

  places: Array<any> = [];
  cams: Array<any> = [];
  loaded: Boolean = false;
  day: String = new Date().getUTCDate() < 10 ? '0' + new Date().getUTCDate().toString() : new Date().getUTCDate().toString();
  month: String = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1).toString() : (new Date().getMonth() + 1).toString();
  date: string = this.day + '-' + this.month + '-' + new Date().getFullYear().toString();

  constructor(
    public api: RestapiServiceProvider
  ) {
   }

  ngOnInit() {
    this.getCameras('Vigo di Fassa', 'Baby park', 'Seggiovia Pramartin');
    this.getCameras('Alpe Lusia', 'Le Cune', 'Pista Intermedia');
  }

  getCameras(place_name: string, cam1_name: string, cam2_name: string) {
    this.api.getCams().then(data => {
      for (const place in data) {
        if (data.hasOwnProperty(place)) {
          if (data[place].name === place_name) {
            for (const camera in data[place].cams) {
              if (data[place].cams.hasOwnProperty(camera)) {
                if (data[place].cams[camera].name === cam1_name || data[place].cams[camera].name === cam2_name) {
                  this.cams.push(data[place].cams[camera].url);
                }
              }
            }
            this.places.push(new Place(data[place].name, this.cams));
            this.cams = [];
          }
        }
      }
    });
  }

}
