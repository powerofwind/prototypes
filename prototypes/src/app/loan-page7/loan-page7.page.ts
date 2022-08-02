import { Component, OnInit } from '@angular/core';
import { LoanDataService } from 'src/services/loan-data.service';

@Component({
  selector: 'app-loan-page7',
  templateUrl: './loan-page7.page.html',
  styleUrls: ['./loan-page7.page.scss'],
})
export class LoanPage7Page implements OnInit {

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

