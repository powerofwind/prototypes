import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-exchange',
  templateUrl: './fiat-topup-exchange.page.html',
  styleUrls: ['./fiat-topup-exchange.page.scss'],
})
export class FiatTopupExchangePage implements OnInit {

  public type: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["type"];
        if (value) {
          this.type = value;
          console.log(this.type);
        }
      });
    }
  }

  ngOnInit() {
  }

  goto() {
    if (this.type == 'fiat') {
      let param: NavigationExtras = { queryParams: { type: "fiat" } };
      this.router.navigate(['/fiat-topup-exchange-confirm'], param);
    }
    else if (this.type == 'qr') {
      let param: NavigationExtras = { queryParams: { type: "qr" } };
      this.router.navigate(['/fiat-topup-qr-confirm'], param);
    }
    else if (this.type == 'mana') {
      let param: NavigationExtras = { queryParams: { type: "mana" } };
      this.router.navigate(['/fiat-topup-mana-confirm'], param);
    }
    else if (this.type == 'crypto') {
      let param: NavigationExtras = { queryParams: { type: "crypto" } };
      this.router.navigate(['/fiat-topup-exchange-confirm'], param);
    }
  }

}
