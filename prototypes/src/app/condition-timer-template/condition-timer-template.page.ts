import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-timer-template',
  templateUrl: './condition-timer-template.page.html',
  styleUrls: ['./condition-timer-template.page.scss'],
})
export class ConditionTimerTemplatePage implements OnInit {

  private progressBarTimer: NodeJS.Timer;
  private nexStepTime: number = 5;  // Config timer

  public isShowNextStepTimer: boolean;
  public displayNextStepTime: number;
  public nextStepProgressBar: number;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.nextStepProgressBar = 0;
    clearInterval(this.progressBarTimer);
  }

  ionViewDidEnter() {
    this.resetTimer(true);
    this.startTimerNextStep();
  }

  onStopNextStep() {
    this.resetTimer(false);
  }

  onSelectNavigationNextStep() {
    this.navigationNextStep();
  }

  private navigationNextStep() {
    this.resetTimer(false);

    // Do something
    // e.g. navigate to next page
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
