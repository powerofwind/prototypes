import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon08received',
  templateUrl: './coupon08received.page.html',
  styleUrls: ['./coupon08received.page.scss'],
})
export class Coupon08receivedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    // this.router.navigate(['/one-prototype-home']);
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'รับคูปองสำเร็จ';
    // alert.message = 'รับคูปองสำเร็จ';
    alert.buttons = [
      {
        text: 'ปิด',
        id: 'confirm-button',
        handler: () => {
          this.router.navigate(['/one-prototype-home']);
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }


}
