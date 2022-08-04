import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon01main',
  templateUrl: './coupon01main.page.html',
  styleUrls: ['./coupon01main.page.scss'],
})
export class Coupon01mainPage implements OnInit {
  text: string = "สนใจ";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoPage() {
    this.router.navigate(['/landingpage',   { title: "1"  }]);
    // this.router.navigate(['/coupon02register']);
  }

}
