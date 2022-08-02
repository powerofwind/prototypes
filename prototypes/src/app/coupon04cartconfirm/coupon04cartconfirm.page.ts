import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon04cartconfirm',
  templateUrl: './coupon04cartconfirm.page.html',
  styleUrls: ['./coupon04cartconfirm.page.scss'],
})
export class Coupon04cartconfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    this.router.navigate(['/coupon05topup']);
  }
}
