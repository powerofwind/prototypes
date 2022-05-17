import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-eslip-detail',
  templateUrl: './eslip-detail.page.html',
  styleUrls: ['./eslip-detail.page.scss'],
})
export class EslipDetailPage implements OnInit {

  public isPay = false;
  public isAgree = false;
  constructor(private memory: MemoryService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isPay = this.memory.isPay;
    this.isAgree = this.memory.isAgree;
    console.log(this.isAgree);
    console.log(this.isPay);
  }

  gotoPage() {
    if (this.isPay == false && this.isAgree) {
      const alert = document.createElement('ion-alert');
      alert.cssClass = 'my-custom-class';
      alert.message = 'อยู่ระหว่างรอการชำระเงินค่าสมัครสมาชิก';
      alert.buttons = ['Cancel'];

      document.body.appendChild(alert);
      return alert.present();
    }
    else {
      this.router.navigate(['/condition']);
    }
  }

}
