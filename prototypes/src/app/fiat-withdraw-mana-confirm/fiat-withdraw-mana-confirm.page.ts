import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fiat-withdraw-mana-confirm',
  templateUrl: './fiat-withdraw-mana-confirm.page.html',
  styleUrls: ['./fiat-withdraw-mana-confirm.page.scss'],
})
export class FiatWithdrawManaConfirmPage implements OnInit {

  constructor(private alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }

  onSave() { 
    console
      this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    
    let msgTopic = `<ion-label>ยืนยันการถอนเงิน</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/txwithdraw.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">จำนวน 20.50 USD</p>`;
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
            this.router.navigate(['/fiat-withdraw']);
          }
        }, {
          text: "ตกลง",
          role: "confirm",
          id: "confirm-button",
          handler: () => {
            this.router.navigate(['/fiat-withdraw']);
          }
        }
      ]
    });

    await alert.present();
  }

}
