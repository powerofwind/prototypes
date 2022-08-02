import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-one-prototype-home',
  templateUrl: './one-prototype-home.page.html',
  styleUrls: ['./one-prototype-home.page.scss'],
})
export class OnePrototypeHomePage implements OnInit {
  public slideOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode: true
  };

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'EV Charger',
      message: 'คืนเงินทอนจากบริการ EV Charger',
      buttons: ['ปิด']

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
