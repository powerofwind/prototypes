import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-topup-confirm',
  templateUrl: './topup-confirm.page.html',
  styleUrls: ['./topup-confirm.page.scss'],
})
export class TopupConfirmPage implements OnInit {


  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    
      this.presentAlertConfirm();
    
  }

  async presentAlertConfirm() {

    let msgTopic = `<ion-label>ไม่สามารถเติมเงินได้</ion-label>`;
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
            // Do something when click confirm button
            // this.router.navigate(['/หน้าคั่น']);
          }
        }
      ]
    });

    await alert.present();
  }

}
