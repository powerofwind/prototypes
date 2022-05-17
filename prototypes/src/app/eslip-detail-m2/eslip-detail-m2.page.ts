import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-eslip-detail-m2',
  templateUrl: './eslip-detail-m2.page.html',
  styleUrls: ['./eslip-detail-m2.page.scss'],
})
export class EslipDetailM2Page implements OnInit {

  public isPay = false;
  public isAgree = false;
  public text: string;

  constructor(private memory: MemoryService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isPay = this.memory.isPayM2;
    this.isAgree = this.memory.isAgreeM2;
    this.buttonDisplayText();
  }
  // [routerLink]="['/condition-m2']"
  gotoPage() {
    if (this.isPay == true && this.isAgree) {
      const alert = document.createElement('ion-alert');
      alert.cssClass = 'my-custom-class';
      // alert.header = 'Alert';
      // alert.subHeader = 'Subtitle';
      alert.message = 'รับคูปองสำเร็จ';
      alert.buttons = ['ปิด'];

      document.body.appendChild(alert);
      return alert.present();
    }
    else {
      this.router.navigate(['/condition-m2']);
    }
  }

  buttonDisplayText() {
    console.log(this.isPay);
    if (this.isPay == false || this.isPay == undefined) {
      this.text = "สนใจ"
    } else {
      this.text = "รับคูปอง"
    }
  }

}
