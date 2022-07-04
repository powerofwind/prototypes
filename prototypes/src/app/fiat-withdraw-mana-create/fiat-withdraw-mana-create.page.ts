import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fiat-withdraw-mana-create',
  templateUrl: './fiat-withdraw-mana-create.page.html',
  styleUrls: ['./fiat-withdraw-mana-create.page.scss'],
})
export class FiatWithdrawManaCreatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    let param: NavigationExtras = { queryParams: { type: "mana" } };
    this.router.navigate(['/fiat-withdraw-exchange'], param);
  }

}
