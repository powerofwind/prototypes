import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ev-page5',
  templateUrl: './ev-page5.page.html',
  styleUrls: ['./ev-page5.page.scss'],
})
export class EvPage5Page implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {

    let msgTopic = `<ion-label>ยืนยันการยกเลิกการชาร์จ</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/defaultshop.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">ชื่อร้าน</p>`;
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
            this.router.navigate(['/one-prototype-home']);
          }
        }
      ]
    });

    await alert.present();
  }
}



