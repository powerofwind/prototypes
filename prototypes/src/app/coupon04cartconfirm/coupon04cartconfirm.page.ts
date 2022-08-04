import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coupon04cartconfirm',
  templateUrl: './coupon04cartconfirm.page.html',
  styleUrls: ['./coupon04cartconfirm.page.scss'],
})
export class Coupon04cartconfirmPage implements OnInit {
  next: any;

  constructor(private alertController: AlertController, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.next = params.next);
  }

  ngOnInit() {
  }

  gotoPage() {
    // this.router.navigate(['/coupon05topup']);
    if (this.next == 1) {
      this.router.navigate(['/coupon07billdetail']);

    } else {
      this.presentAlertConfirm();
    }
  }
  async presentAlertConfirm() {
    let msgTopic = `<ion-label>จำนวนเงินไม่พอจ่าย</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/iconunsuccess.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">ต้องการไปเติมเงินหรือไม่</p>`;
    let alertMsg = `<div class="ion-text-center">${msgTopic}${msgIcon}${msgBottom}</div>`;

    const alert = await this.alertController.create({
      mode: "md",
      message: alertMsg,
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          id: "cancel-button",
          handler: () => {
            // Do something when click cancel button
          }
        }, {
          text: "ตกลง",
          role: "confirm",
          id: "confirm-button",
          handler: () => {
            this.router.navigate(['/coupon05topup']);
          }
        }
      ]
    });

    await alert.present();
  }
}
