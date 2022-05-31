import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition-topup',
  templateUrl: './condition-topup.page.html',
  styleUrls: ['./condition-topup.page.scss'],
})
export class ConditionTopupPage implements OnInit {

  public isKYC: boolean = true
  public isCreateAcc: boolean = true
  public isTopUp: boolean = false
  public isWaiting: boolean;
  public text: string;

  private progressBarTimer: NodeJS.Timer;
  private nexStepTime: number = 5;  // Config timer
  public isShowNextStepTimer: boolean;
  public displayNextStepTime: number;
  public nextStepProgressBar: number;

  constructor(private memory: MemoryService, private router: Router,private alertController: AlertController) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isKYC = true
    this.isCreateAcc = true
    this.isTopUp = this.memory.isTopUp;
    this.isWaiting = this.memory.isWaiting;
    console.log(this.isWaiting);
    this.buttonDisplayText();

    this.resetTimer(true);
    if ((this.isCreateAcc && !this.isTopUp) || (this.isTopUp && !this.isWaiting)) {
      this.startTimerNextStep();
    }

  }

  buttonDisplayText() {
    console.log("isTopUp",this.isTopUp);
    console.log("isWaiting",this.isWaiting);
    if (this.isWaiting == true && this.isTopUp) {
      this.text = "ทำรายการที่ไม่ผ่านเงื่อนไข"
    }
    else{
      this.text = "ทำรายการต่อ"
    }
  }

  ionViewWillLeave() {
    this.nextStepProgressBar = 0;
    clearInterval(this.progressBarTimer);
  }

  onStopNextStep() {
    this.resetTimer(false);
  }

  public onSelectNavigationNextStep() {
    this.navigationNextStep();
  }

  public navigationNextStep() {
    this.resetTimer(false);
    if (this.isCreateAcc && !this.isTopUp) {
      this.router.navigate(['/topup-list'], { skipLocationChange: true });
    }
    else if (this.isTopUp && this.isWaiting) {
      this.router.navigate(['/topup-list']);
    }
    else if (this.isTopUp && !this.isWaiting) {
      this.router.navigate(['/cart-checkout-m3']);
    }
  }

  private startTimerNextStep() {
    let interval = 20;
    let updateProgressBarValue = interval / (this.nexStepTime * 1000);
    let loop = 1;

    this.progressBarTimer = setInterval(() => {

      this.nextStepProgressBar += updateProgressBarValue;

      if (this.nextStepProgressBar >= (1 / this.nexStepTime) * loop) {
        loop++;
        this.displayNextStepTime--;
      }

      if (this.nextStepProgressBar >= 1) {
        this.navigationNextStep();
      }
    }, interval);
  }

  private resetTimer(isShowTimer: boolean) {
    clearInterval(this.progressBarTimer);
    this.isShowNextStepTimer = isShowTimer;
    this.nextStepProgressBar = 0;
    this.displayNextStepTime = this.nexStepTime;
  }

  async openDlg(){
    let msgTopic = `<ion-label>เติมเงินสำเร็จ</ion-label>`;
    let msgIcon = `<div class="ion-padding"><img class="circle logo-l" src="assets/imgs/iconsuccess.png" /></div>`
    let msgBottom = `<p class="ion-no-margin">100 บาท</p>`;
    let alertMsg = `<div class="ion-text-center">${msgTopic}${msgIcon}${msgBottom}</div>`;

    const alert = await this.alertController.create({
      mode: "md",
      message: alertMsg,
      buttons: [
        {
          text: "ปิด",
          role: "confirm",
          id: "confirm-button",
          handler: () => {
            this.memory.isWaiting = false;
            this.ionViewDidEnter()
          }
        }
      ]
    });

    await alert.present();
  }


}
