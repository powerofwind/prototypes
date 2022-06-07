import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-edit-m2',
  templateUrl: './cart-edit-m2.page.html',
  styleUrls: ['./cart-edit-m2.page.scss'],
})
export class CartEditM2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openOptionDlg(){
    this.router.navigate(['/option-dialog-template']);
  }

}
