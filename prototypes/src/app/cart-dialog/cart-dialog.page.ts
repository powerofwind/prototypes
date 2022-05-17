import { Component, OnInit } from '@angular/core';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.page.html',
  styleUrls: ['./cart-dialog.page.scss'],
})
export class CartDialogPage implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
  }
  
  isPaying(){
    this.memory.isPay = true;
  }
}
