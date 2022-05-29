import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-cart-checkout-m4',
  templateUrl: './cart-checkout-m4.page.html',
  styleUrls: ['./cart-checkout-m4.page.scss'],
})
export class CartCheckoutM4Page implements OnInit {

  public isTopUp: boolean;
  constructor(private alertController: AlertController, private router: Router, private memory: MemoryService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isTopUp = this.memory.isTopUp;
  }

  onSave() {
    console.log(this.isTopUp);
    if (!this.isTopUp) {
      this.presentAlertConfirm();
    }
    else{
      this.router.navigate(['/cart-dialog-m4']);
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
            this.memory.isTopUp = true;
            this.router.navigate(['/topup-list-m4']);
          }
        }
      ]
    });

    await alert.present();
  }


}
