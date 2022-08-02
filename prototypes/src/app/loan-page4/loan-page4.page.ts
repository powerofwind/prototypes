import { Component, OnInit } from '@angular/core';
import { LoanDataService } from 'src/services/loan-data.service';

@Component({
  selector: 'app-loan-page4',
  templateUrl: './loan-page4.page.html',
  styleUrls: ['./loan-page4.page.scss'],
})
export class LoanPage4Page implements OnInit {
  public loanContractId: string = "-";
  constructor(private svc: LoanDataService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.svc.activeContractId) {
      this.loanContractId = this.svc.activeContractId;
    }
  }

}