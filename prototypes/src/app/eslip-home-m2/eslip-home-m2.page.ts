import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-eslip-home-m2',
  templateUrl: './eslip-home-m2.page.html',
  styleUrls: ['./eslip-home-m2.page.scss'],
})
export class EslipHomeM2Page implements OnInit {

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
    this.isPay = this.memory.isPayM2;
    this.isAgree = this.memory.isAgreeM2;
  }

  gotoPage(){
    this.memory.isHomeM2 = true;
    this.router.navigate(['/cart-edit-m2']);
  }

}
