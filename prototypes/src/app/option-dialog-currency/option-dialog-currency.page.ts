import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-option-dialog-currency',
  templateUrl: './option-dialog-currency.page.html',
  styleUrls: ['./option-dialog-currency.page.scss'],
})
export class OptionDialogCurrencyPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.back({ animated: false });
  }


}
