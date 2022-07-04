import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-exchange',
  templateUrl: './fiat-topup-exchange.page.html',
  styleUrls: ['./fiat-topup-exchange.page.scss'],
})
export class FiatTopupExchangePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    this.router.navigate(['/fiat-topup-exchange-confirm']);
  }

}
