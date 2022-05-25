import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-form-confirm-dialog",
  templateUrl: "./form-confirm-dialog.page.html",
  styleUrls: ["./form-confirm-dialog.page.scss"],
})
export class FormConfirmDialogPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'remark': null,
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      this.presentAlertConfirm();
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  async presentAlertConfirm() {

    let msgTopic = `<ion-label>ยืนยันการสร้างข้อมูล</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/defaultshop.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">ชื่อหัวข้อ: ${this.fg.get("title").value}</p>
                     <p class="ion-no-margin">เบอร์ติดต่อ: ${this.fg.get("phoneNumber").value}</p>`;
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
          }
        }
      ]
    });

    await alert.present();
  }

}
