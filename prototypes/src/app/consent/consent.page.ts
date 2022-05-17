import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.page.html',
  styleUrls: ['./consent.page.scss'],
})
export class ConsentPage implements OnInit {

  private mcontentid = "pay-m2";
  public isAgreementOpening: boolean = false;
  public isFirstTime: boolean = true;
  public fg: FormGroup;
  public buttonText: string = "อ่านแล้ว";

  // , private storage: StorageDataProvider, private svc: IonManaLib
  constructor(private fb: FormBuilder, private zone: NgZone, private navCtrl: NavController) {
    // this.mapi = this.svc.initManaAPI(this.mcontentid);
    this.fg = this.fb.group({
      'isAceeptAgreement': [null, Validators.required],
      'isSubscribe': true,
      'isAddShortcut': true,
      'isAgree': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.mapi.initPageApi();
    // this.mapi.validForm(true);
  }

  onOpenAgreement() {
    this.isAgreementOpening = true;
    this.zone.run(() => {
      this.buttonText = "อ่านแล้ว";
      // this.mapi.initPageApi();
    });
  }

  onCloseAgreement() {
    this.isAgreementOpening = false;
    this.zone.run(() => {
      this.buttonText = "ยืนยัน";
      // this.mapi.initPageApi();
    });
  }

  onSave() {

    if (this.isAgreementOpening == true) {
      this.onCloseAgreement();
      return;
    }

    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      // this.storage.isPassCondition = this.fg.get("isAgree").value == "true";
      this.navCtrl.back({ animated: false });
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
