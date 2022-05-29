import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-cart-dialog-m4',
  templateUrl: './cart-dialog-m4.page.html',
  styleUrls: ['./cart-dialog-m4.page.scss'],
})
export class CartDialogM4Page implements OnInit {

  // public isHomeM2: boolean = false;
  constructor(private memory: MemoryService,private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.isHomeM2 = this.memory.isHomeM2;
  }

  isPaying(){
    this.memory.isPayM3 = true;
    this.router.navigate(['/condition-m4']);

    // if (this.isHomeM2) {
    //   this.router.navigate(['/eslip-home-m2']);
    // }
    // else{
    //   this.router.navigate(['/condition-m2']);
    // }
  }


}
