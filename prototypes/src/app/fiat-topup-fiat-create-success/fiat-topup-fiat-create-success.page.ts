import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiat-topup-fiat-create-success',
  templateUrl: './fiat-topup-fiat-create-success.page.html',
  styleUrls: ['./fiat-topup-fiat-create-success.page.scss'],
})
export class FiatTopupFiatCreateSuccessPage implements OnInit {

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
