import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon03cart',
  templateUrl: './coupon03cart.page.html',
  styleUrls: ['./coupon03cart.page.scss'],
})
export class Coupon03cartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    this.router.navigate(['/coupon04cartconfirm']);
  }

}
