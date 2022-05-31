import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topup-list',
  templateUrl: './topup-list.page.html',
  styleUrls: ['./topup-list.page.scss'],
})
export class TopupListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoNextPage(){
    this.router.navigate(['/topup-confirm'], { skipLocationChange: true });
  }

}
