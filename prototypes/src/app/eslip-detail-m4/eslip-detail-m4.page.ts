import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-eslip-detail-m4',
  templateUrl: './eslip-detail-m4.page.html',
  styleUrls: ['./eslip-detail-m4.page.scss'],
})
export class EslipDetailM4Page implements OnInit {

  public isPay = false;
  public isPay3 = false;
  public isAgree = false;
  public text: string;

  constructor(private memory: MemoryService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isPay = true;
    // this.isPay3 = this.memory.isPayM3;
    // this.isAgree = this.memory.isAgreeM2;
    this.buttonDisplayText();
  }

  gotoPage() {
    if (this.isPay) {
      const alert = document.createElement('ion-alert');
      alert.cssClass = 'my-custom-class';
      alert.header = 'รับคูปองสำเร็จ';
      // alert.message = 'รับคูปองสำเร็จ';
      alert.buttons = [
        {
          text: 'ปิด',
          id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/eslip-home-m3']);
          }
        }
      ];
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
