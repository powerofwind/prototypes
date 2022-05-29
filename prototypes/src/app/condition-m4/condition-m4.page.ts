import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition-m4',
  templateUrl: './condition-m4.page.html',
  styleUrls: ['./condition-m4.page.scss'],
})
export class ConditionM4Page implements OnInit {

  public isAgree: boolean = false
  public isPay: boolean = false
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
    this.isAgree = true;
    this.isPay = true;
    this.buttonDisplayText();

    this.resetTimer(true);
    this.startTimerNextStep();
    console.log(this.isPay);
    console.log(this.isAgree);
  }

  // gotoPage() {
  //   console.log(this.isAgree);
  //   console.log(this.isPay);

  //   if (this.isAgree == false || this.isAgree == undefined) {
  //     this.resetTimer(false);
  //     this.router.navigate(['/consent-m2']);
  //   }
  //   else if (this.isPay == false) {
  //     this.resetTimer(false);
  //     this.router.navigate(['/cart-edit-m2']);
  //   }
  //   else if (this.isPay == true) {
  //     this.resetTimer(false);
  //     this.router.navigate(['/eslip-detail-m2']);
  //   }
  // }

  buttonDisplayText() {
    if (this.isPay == false) {
      this.text = "ทำรายการที่ไม่ผ่านเงื่อนไข"
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
    if (this.isAgree && !this.isPay) {
      this.router.navigate(['/cart-edit-m3']);
    }
    else if (this.isPay == true) {
      this.router.navigate(['/eslip-detail-m2']);
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