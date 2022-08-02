import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoanDataService } from 'src/services/loan-data.service';

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
  public feeds: any[] = [];

  constructor(public alertController: AlertController, private router: Router, private svc: LoanDataService) { }
  
  ionViewDidEnter() {
    this.feeds = this.svc.feeds;
  }

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


  onSelectItem(item){
    this.svc.activeContractId = item.loanContractId;
    this.router.navigate(['/loan-page4']);
  }

}



