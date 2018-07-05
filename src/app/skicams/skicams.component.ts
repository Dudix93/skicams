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
  loaded: boolean = false;
  date: string = new Date().getUTCDate().toString()+"-"+(new Date().getMonth()+1).toString()+"-"+new Date().getFullYear().toString();

  constructor(
    public api: RestapiServiceProvider
  ) {
   }

  ngOnInit() {
    this.getCameras('Vigo di Fassa', 'Baby park', 'Seggiovia Pramartin');
    this.getCameras('Alpe Lusia', 'Le Cune', 'Pista Intermedia');
    // setTimeout(()=>{
    //   this.loaded = true;
    // },2000);
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
