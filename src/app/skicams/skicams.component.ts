import { Component, OnInit } from '@angular/core';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.css']
})
export class SkicamsComponent implements OnInit {

  constructor(public api: RestapiServiceProvider) {
    this.api.getCams().then(data => console.log(data));
   }

  ngOnInit() {
  }

}
