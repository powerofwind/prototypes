import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consent-kyc',
  templateUrl: './consent-kyc.page.html',
  styleUrls: ['./consent-kyc.page.scss'],
})
export class ConsentKycPage implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'isAgree': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

}
