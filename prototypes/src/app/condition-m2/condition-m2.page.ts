import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition-m2',
  templateUrl: './condition-m2.page.html',
  styleUrls: ['./condition-m2.page.scss'],
})
export class ConditionM2Page implements OnInit {

  public isAgree = false
  constructor(private memory: MemoryService, private router: Router) {
  }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.isAgree = this.memory.isAgree;
    console.log(this.isAgree);
  }

  gotoPage(){
    if (this.isAgree == false || this.isAgree == undefined) {
      this.router.navigate(['/consent-m2']);
    }
    else{
      this.router.navigate(['/eslip-detail-m2']);
    }
  }
}
