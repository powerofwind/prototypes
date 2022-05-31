import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { MemoryService } from 'src/services/memory.service';


@Component({
  selector: 'app-topup-confirm',
  templateUrl: './topup-confirm.page.html',
  styleUrls: ['./topup-confirm.page.scss'],
})
export class TopupConfirmPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router, private memory: MemoryService) { }

  ngOnInit() {
  }

  onSave() {

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
            this.memory.isWaiting = true;
            console.log(this.memory.isWaiting);
            
            this.router.navigate(['/condition-topup']);
          }
        }
      ]
    });

    await alert.present();
  }

}
