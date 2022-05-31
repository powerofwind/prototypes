import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition-topup-m3',
  templateUrl: './condition-topup-m3.page.html',
  styleUrls: ['./condition-topup-m3.page.scss'],
})
export class ConditionTopupM3Page implements OnInit {

  public isKYC: boolean = true
  public isCreateAcc: boolean = true
  public isTopUp: boolean = false
  public isWaiting: boolean = false
  public text: string;

  private progressBarTimer: NodeJS.Timer;
  private nexStepTime: number = 5;  // Config timer
  public isShowNextStepTimer: boolean;
  public displayNextStepTime: number;
  public nextStepProgressBar: number;

  constructor(private memory: MemoryService, private router: Router) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isKYC = true
    this.isCreateAcc = true
    this.isTopUp = this.memory.isTopUp;
    this.isWaiting = this.memory.isWaiting;
    this.buttonDisplayText();

    this.resetTimer(true);
    // this.startTimerNextStep();

  }

  buttonDisplayText() {
    console.log(this.isWaiting);

    // if (((this.isTopUp == false) || (this.isTopUp == undefined) )|| this.isWaiting == true) {
    if (this.isWaiting == true && this.isTopUp) {
      console.log("1111");
      this.text = "ทำรายการที่ไม่ผ่านเงื่อนไข"
      console.log(this.text);
      
    }
    this.text = "ทำรายการต่อ"
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
    // if (this.isAgree == false || this.isAgree == undefined) {
    //   this.router.navigate(['/consent-m2']);
    // }
    console.log(this.isTopUp);

    if (this.isCreateAcc && !this.isTopUp) {
      console.log("111");
      this.router.navigate(['/topup-list']);
    }
    else if (this.isTopUp && !this.isWaiting) {
      console.log("222");
      this.router.navigate(['/cart-checkout-m3']);
    }
    else if (this.isWaiting && this.isWaiting) {
      console.log("33");
      this.router.navigate(['/topup-list']);
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

}
