import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-exchange-confirm',
  templateUrl: './fiat-topup-exchange-confirm.page.html',
  styleUrls: ['./fiat-topup-exchange-confirm.page.scss'],
})
export class FiatTopupExchangeConfirmPage implements OnInit {

  public type: any;
  constructor(private router: Router, private route: ActivatedRoute) {
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

  goto(){
    if (this.type == 'fiat') {
      let param: NavigationExtras = { queryParams: { type: "fiat" } };
      this.router.navigate(['/fiat-topup-fiat-create-success'], param);
    }
    else if (this.type == 'crypto') {
      let param: NavigationExtras = { queryParams: { type: "crypto" } };
      this.router.navigate(['/fiat-topup-fiat-create-success'], param);
    }

  }

}