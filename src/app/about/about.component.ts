import { Component, OnInit } from '@angular/core';
import { AboutCard } from '../../models/aboutCard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutCardsRows: Array<any> = [];
  aboutCards: Array<any> = [];
  nextRow: Boolean = true;

  constructor() { }

  ngOnInit() {
    this.newCard('img1.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ex nec legendos repudiandae, cu.');
    this.newCard('img2.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ex nec legendos repudiandae, cu.');
    this.newCard('img3.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ex nec legendos repudiandae, cu.');
  }

  newCard(img: string, title: string, text: string) {
    if (this.aboutCards.length === 0 || this.aboutCards.length % 3 === 0) {
      this.aboutCards = [];
      this.aboutCards.push(new AboutCard(img, title, text));
      this.aboutCardsRows.push(this.aboutCards);
    } else {
      this.aboutCards.push(new AboutCard(img, title, text));
      this.aboutCardsRows[this.aboutCardsRows.length - 1] = this.aboutCards;
    }
  }
}
