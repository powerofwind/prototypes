import { Component, OnInit } from '@angular/core';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-fiat-main',
  templateUrl: './fiat-main.page.html',
  styleUrls: ['./fiat-main.page.scss'],
})
export class FiatMainPage implements OnInit {

  public isCreateWallet: any;
  constructor(private memory: MemoryService) {

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isCreateWallet = this.memory.isCreateWallet;
  }



}
