import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eslip-home-m3',
  templateUrl: './eslip-home-m3.page.html',
  styleUrls: ['./eslip-home-m3.page.scss'],
})
export class EslipHomeM3Page implements OnInit {

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
