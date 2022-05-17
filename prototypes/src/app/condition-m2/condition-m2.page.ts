import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition-m2',
  templateUrl: './condition-m2.page.html',
  styleUrls: ['./condition-m2.page.scss'],
})
export class ConditionM2Page implements OnInit {

  public isAgree: boolean = false
  public isPay: boolean = false
  public text: string;
  constructor(private memory: MemoryService, private router: Router) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isAgree = this.memory.isAgreeM2;
    this.isPay = this.memory.isPayM2;
    this.buttonDisplayText();
    console.log(this.isPay);
    console.log(this.isAgree);
  }

  gotoPage() {
    console.log(this.isAgree);
    console.log(this.isPay);

    if (this.isAgree == false || this.isAgree == undefined) {
      console.log("111");
      this.router.navigate(['/consent-m2']);
    }
    else if (this.isPay == false) {
      console.log("2222");
      this.router.navigate(['/cart-edit-m2']);
    }
    else if (this.isPay == true) {
      console.log("333");
      this.router.navigate(['/eslip-detail-m2']);
    }
  }

  buttonDisplayText() {
    if (this.isPay == false) {
      this.text = "ทำรายการที่ไม่ผ่านเงื่อนไข"
    }
    this.text = "ทำรายการต่อ"
  }
}
