import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoanDataService } from 'src/services/loan-data.service';

@Component({
  selector: 'app-loan-page3',
  templateUrl: './loan-page3.page.html',
  styleUrls: ['./loan-page3.page.scss'],
})
export class LoanPage3Page implements OnInit {

  public loanContractId: string;

  constructor(private navCtrl: NavController, private svc: LoanDataService) { }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    if (this.svc.LoanContractId) {
      this.loanContractId = this.svc.LoanContractId;
    }
  }

  UpdateLoanContractId(event) {
    this.loanContractId = event.target.value
  }

  onDismiss() {
    this.navCtrl.back();
  }

  onSubmit() {
    this.svc.LoanContractId = this.loanContractId;
    this.onDismiss();
  }
}
