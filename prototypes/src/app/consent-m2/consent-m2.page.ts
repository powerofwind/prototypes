import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-consent-m2',
  templateUrl: './consent-m2.page.html',
  styleUrls: ['./consent-m2.page.scss'],
})
export class ConsentM2Page implements OnInit {

  public isAgreementOpening: boolean = false;
  public isFirstTime: boolean = true;
  public fg: FormGroup;
  public buttonText: string = "อ่านแล้ว";

  constructor(private fb: FormBuilder, private zone: NgZone, private navCtrl: NavController, private memory: MemoryService) {
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
  }

  onOpenAgreement() {
    this.isAgreementOpening = true;
    this.zone.run(() => {
      this.buttonText = "อ่านแล้ว";
    });
  }

  onCloseAgreement() {
    this.isAgreementOpening = false;
    this.zone.run(() => {
      this.buttonText = "ยืนยัน";
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
      this.memory.isAgree = this.fg.get("isAgree").value;
      this.memory.isPay = false;
      console.log(this.memory.isPay);
      this.navCtrl.back({ animated: false });
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
