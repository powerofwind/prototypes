import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coupon06topupdetail',
  templateUrl: './coupon06topupdetail.page.html',
  styleUrls: ['./coupon06topupdetail.page.scss'],
})
export class Coupon06topupdetailPage implements OnInit {
  next: any;

  constructor(private alertController: AlertController, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.next = params.next);

  }

  ngOnInit() {
  }

  gotoPage() {
  
      this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    let msgTopic = `<ion-label>กำลังส่งคำขอเติมเงินไปยัง</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/icontopup.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">พร้อมเพย์ 0911234567</p>`;
    let msgBottom2 = `<p class="ion-no-margin">กรุณายืนยันคำขอที่ mobile banking ของคุณ</p>`;
    let alertMsg = `<div class="ion-text-center">${msgTopic}${msgIcon}${msgBottom}${msgBottom2}</div>`;

    const alert = await this.alertController.create({
      mode: "md",
      message: alertMsg,
      buttons: [
        {
          text: "ปิด",
          role: "confirm",
          id: "confirm-button",
          handler: () => {
            this.router.navigate(['/coupon04cartconfirm', { next: 1 }]);
          }
        }
      ]
    });

    await alert.present();
  }
}
