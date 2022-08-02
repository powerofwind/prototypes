import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-page6',
  templateUrl: './loan-page6.page.html',
  styleUrls: ['./loan-page6.page.scss'],
})
export class LoanPage6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private debugClickTime = 0;
  onDebugClick() {

    this.debugClickTime++;

    if (this.debugClickTime >= 3) {
      this.debugClickTime = 0;
      this.router.navigate(['/loan-page7']);
    }

  }

}