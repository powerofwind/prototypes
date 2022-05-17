import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-consent-m3',
  templateUrl: './consent-m3.page.html',
  styleUrls: ['./consent-m3.page.scss'],
})
export class ConsentM3Page implements OnInit {

  public isAgreementOpening: boolean = false;
  public isFirstTime: boolean = true;
  public fg: FormGroup;
  public buttonText: string = "อ่านแล้ว";

  constructor(private fb: FormBuilder, private zone: NgZone, private navCtrl: NavController, private memory: MemoryService,private router: Router) {
    this.fg = this.fb.group({
      'isAceeptAgreement': [null, Validators.required],
      'isSubscribe': [null, Validators.required],
      'isAddShortcut': [null, Validators.required],
      'isAgree': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
  }

  onOpenAgreement() {
    console.log("1111111222");
    
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

  gotoCart(){
    this.router.navigate(['/cart-edit']);
  }


}
