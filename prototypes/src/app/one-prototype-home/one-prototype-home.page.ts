import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-prototype-home',
  templateUrl: './one-prototype-home.page.html',
  styleUrls: ['./one-prototype-home.page.scss'],
})
export class OnePrototypeHomePage implements OnInit {
  public slideOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {
  }

}
