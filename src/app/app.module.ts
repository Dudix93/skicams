import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkicamsComponent } from './skicams/skicams.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'skicams', component: SkicamsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkicamsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    RestapiServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
