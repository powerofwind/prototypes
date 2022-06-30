import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiat-create',
  templateUrl: './fiat-create.page.html',
  styleUrls: ['./fiat-create.page.scss'],
})
export class FiatCreatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    this.router.navigate(['/option-dialog-currency']);

  }

}
