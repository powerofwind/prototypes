import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-mana-create',
  templateUrl: './fiat-topup-mana-create.page.html',
  styleUrls: ['./fiat-topup-mana-create.page.scss'],
})
export class FiatTopupManaCreatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    let param: NavigationExtras = { queryParams: { type: "mana" } };
    this.router.navigate(['/fiat-topup-exchange'], param);
  }

}
