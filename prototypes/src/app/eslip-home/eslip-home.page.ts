import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eslip-home',
  templateUrl: './eslip-home.page.html',
  styleUrls: ['./eslip-home.page.scss'],
})
export class EslipHomePage implements OnInit {

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
