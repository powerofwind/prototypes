import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-page2',
  templateUrl: './loan-page2.page.html',
  styleUrls: ['./loan-page2.page.scss'],
})
export class LoanPage2Page implements OnInit {

  private isFirstTime: boolean = true;

  public fg: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private svc: LoanDataServiceService) {

    this.fg = this.fb.group({
      'loanContractId': [null, Validators.required],
      'isAgree': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.svc.LoanContractId) {
      this.fg.get("loanContractId").setValue(this.svc.LoanContractId);
    }
  }

  onSubmit() {

    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {

      let loanContractId = this.fg.get("loanContractId").value;
      this.svc.feeds = [
        { title: "สหกรณ์ออมทรัพย์", description: `สัญญา ${loanContractId} (รอการผูกบัญชี)`, loanContractId: loanContractId }
      ];
      this.svc.activeContractId = loanContractId;
      this.svc.LoanContractId = "";

      this.router.navigate(['/loan-m5']);
    }

  }


  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
