import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {


  private progressBarTimer: NodeJS.Timer;
  private nexStepTime: number = 5;  // Config timer
  public isShowNextStepTimer: boolean;
  public displayNextStepTime: number;
  public nextStepProgressBar: number;
  title: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.title = params.title);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.buttonDisplayText();

    this.resetTimer(true);
    this.startTimerNextStep();
  }

  ionViewWillLeave() {
    this.nextStepProgressBar = 0;
    clearInterval(this.progressBarTimer);
  }

  onStopNextStep() {
    this.resetTimer(false);
  }

  private resetTimer(isShowTimer: boolean) {
    clearInterval(this.progressBarTimer);
    this.isShowNextStepTimer = isShowTimer;
    this.nextStepProgressBar = 0;
    this.displayNextStepTime = this.nexStepTime;
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

  public navigationNextStep() {
    this.resetTimer(false);
    // if (this.isAgree == false || this.isAgree == undefined) {
    //   this.router.navigate(['/consent-m2']);
    // }
    // else if (this.isPay == false) {
    //   this.router.navigate(['/cart-edit-m2']);
    // }
    // else if (this.isPay == true) {
    // }
    if (this.title == 1) {
      this.router.navigate(['/coupon02register']);
    } else if (this.title == 3) {
      this.router.navigate(['/coupon03cart']);
    } else if (this.title == 4) {
      this.router.navigate(['/coupon08received']);
    } else {
      this.router.navigate(['/one-prototype-home']);
    }
  }

  openDlg(){
    this.title++;
  }



}
