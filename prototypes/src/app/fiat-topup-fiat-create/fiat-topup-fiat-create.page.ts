import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-fiat-create',
  templateUrl: './fiat-topup-fiat-create.page.html',
  styleUrls: ['./fiat-topup-fiat-create.page.scss'],
})
export class FiatTopupFiatCreatePage implements OnInit {

  public type: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);

  }

  ngOnInit() {
  }

  goto() {
    if (this.type == 'fiat') {
      let param: NavigationExtras = { queryParams: { type: "fiat" } };
      this.router.navigate(['/fiat-topup-exchange'], param);
    }
    else if (this.type == 'crypto') {
      let param: NavigationExtras = { queryParams: { type: "crypto" } };
      this.router.navigate(['/fiat-topup-exchange'], param);
    }
  }

}