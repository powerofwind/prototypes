import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-cart-dialog-m2',
  templateUrl: './cart-dialog-m2.page.html',
  styleUrls: ['./cart-dialog-m2.page.scss'],
})
export class CartDialogM2Page implements OnInit {

  public isHomeM2: boolean = false;
  constructor(private memory: MemoryService,private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isHomeM2 = this.memory.isHomeM2;
  }

  isPaying(){
    this.memory.isPayM2 = true;
    this.router.navigate(['/condition-m2']);

    // if (this.isHomeM2) {
    //   this.router.navigate(['/eslip-detail-m2']);
    // }
    // else{
    //   this.router.navigate(['/condition-m2']);
    // }
  }
}
