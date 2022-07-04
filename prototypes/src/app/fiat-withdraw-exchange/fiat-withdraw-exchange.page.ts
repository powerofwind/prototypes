import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-withdraw-exchange',
  templateUrl: './fiat-withdraw-exchange.page.html',
  styleUrls: ['./fiat-withdraw-exchange.page.scss'],
})
export class FiatWithdrawExchangePage implements OnInit {

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
    if (this.type == 'mana') {
      let param: NavigationExtras = { queryParams: { type: "mana" } };
      this.router.navigate(['/fiat-withdraw-mana-confirm'], param);
    }
    else if (this.type == 'fiat') {
      let param: NavigationExtras = { queryParams: { type: "fiat" } };
      this.router.navigate(['/fiat-withdraw-exchange-confirm'], param);
    }
    else if (this.type == 'crypto') {
      let param: NavigationExtras = { queryParams: { type: "crypto" } };
      this.router.navigate(['/fiat-withdraw-exchange-confirm'], param);
    }
  }

}
