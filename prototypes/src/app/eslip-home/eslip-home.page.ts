import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

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
  public isPay = false;
  public isAgree = false;

  constructor(private memory: MemoryService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isPay = this.memory.isPay;
    this.isAgree = this.memory.isAgree;
  }

}
