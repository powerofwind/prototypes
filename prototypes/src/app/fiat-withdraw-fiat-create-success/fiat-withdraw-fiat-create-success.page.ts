import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiat-withdraw-fiat-create-success',
  templateUrl: './fiat-withdraw-fiat-create-success.page.html',
  styleUrls: ['./fiat-withdraw-fiat-create-success.page.scss'],
})
export class FiatWithdrawFiatCreateSuccessPage implements OnInit {

  public type: any;

  constructor(private route: ActivatedRoute) {
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

}
