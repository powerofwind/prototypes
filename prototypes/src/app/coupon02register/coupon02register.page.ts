import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon02register',
  templateUrl: './coupon02register.page.html',
  styleUrls: ['./coupon02register.page.scss'],
})
export class Coupon02registerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    this.router.navigate(['/coupon03cart']);
  }

}
