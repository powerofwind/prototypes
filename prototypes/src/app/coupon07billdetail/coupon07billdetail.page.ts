import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon07billdetail',
  templateUrl: './coupon07billdetail.page.html',
  styleUrls: ['./coupon07billdetail.page.scss'],
})
export class Coupon07billdetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    this.router.navigate(['/landingpage', { title: "4" }]);
    // this.router.navigate(['/coupon03cart']);
  }


}
