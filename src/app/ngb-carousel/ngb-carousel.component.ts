import { Component, OnInit } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
export class NgbCarouselComponent implements OnInit {
  slides: any[];
  imgPath = 'assets/images/';

  constructor(
    config: NgbCarouselConfig
  ) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this.slides = [];
    this.slides.push({
      title: 'Première image',
      caption: 'Chemin de fer au Canada',
      imgSrc: `${this.imgPath}beautiful-landscape-pictures-of-canadian-railroad-02.jpg`
    });
    this.slides.push({
      title: 'Deuxième image',
      caption: 'Montagne dans la brume',
      imgSrc: `${this.imgPath}beautiful-landscape-pictures-15-dazzling-ideas-photography-by-ty-newcomb-art-800x600.jpg`
    });
    this.slides.push({
      title: 'Troisième image',
      caption: 'Puerto Rico',
      imgSrc: `${this.imgPath}Puerto-Rico.jpg`
    });
  }
}
