import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-qr',
  templateUrl: './fiat-topup-qr.page.html',
  styleUrls: ['./fiat-topup-qr.page.scss'],
})
export class FiatTopupQrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    let param: NavigationExtras = { queryParams: { type: "qr" } };
    this.router.navigate(['/fiat-topup-exchange'], param);

  }

}
